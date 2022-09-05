import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../../assets/images';
import { Strings } from '../../constants';
import { useCurrentUserDetails } from '../../hooks/useCurrentUID';
import { returnConversationID } from '../../services/HelperFunctions';
import { Colors } from '../../themes';
import HeaderComponent from '../movieDetails/components/Header';
import { useOtherUserDetails } from '../otherProfile/hooks/useOtherUserDetails';
import ChatMessageCard from './components/ChatMessageCard';
import { useChatDetails } from './hooks/useChatDetails';
import styles from './styles/ChatScreenStyles';
import { TextMessageProps } from './types/ChatScreenTypes';

const ChatScreen = ({ navigation }) => {
  const { username, uid } = useOtherUserDetails();
  const { currentUserUID } = useCurrentUserDetails();
  const [msg, setMsg] = useState<string>('');
  const [thread, setThread] = useState([]);
  const textInputRef = useRef(null);
  const { isUserOnline, lastSeen } = useChatDetails();
  const [imageSelected, setImageSelected] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const docid = returnConversationID({
      senderUID: currentUserUID,
      receiverUID: uid,
    });
    const subscriber = firestore()
      .collection('messages')
      .doc(`${docid}`)
      .collection('chatMessages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const messageData = snapshot.docs.map(document => ({
          _id: document.data()._id,
          text: document.data().text,
          createdAt: document.data().createdAt,
          senderUID: document.data().senderUID,
          messageTime: document.data().messageTime,
          imageUrl: document.data().imageUrl,
          type: document.data().type,
        }));
        setThread(messageData);
      });
    return () => subscriber();
  }, []);

  const sendMessage = (textMessage: string) => {
    const docid = returnConversationID({
      senderUID: currentUserUID,
      receiverUID: uid,
    });
    firestore()
      .collection('messages')
      .doc(`${docid}`)
      .collection('chatMessages')
      .add({
        type: 0,
        text: textMessage,
        createdAt: firestore.FieldValue.serverTimestamp(),
        senderUID: currentUserUID,
        messageTime: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
  };

  const selectPicture = async () => {
    const imageLibraryOptions: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.9,
    };
    launchImageLibrary(
      imageLibraryOptions,
      async function (responseObject: any) {
        if (responseObject && responseObject.assets) {
          const picUri = responseObject.assets[0]?.uri;
          setImageUrl(picUri);
          setImageSelected(true);
        }
      },
    );
  };

  const onHitSendImage = async () => {
    uploadImage();
  };

  const uploadImage = async () => {
    storage()
      .ref()
      .child(`/chatPhotos/${Math.random()}`)
      .putFile(imageUrl)
      .on(
        'state_changed',
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // if (progress === 100) Alert.alert('Image uploaded');
          snapshot.ref.getDownloadURL().then(downloadURL => {
            // setPictureUrl(downloadURL);
            uploadImage2(downloadURL);
          });
        },
        error => {
          Alert.alert('error uploading image');
        },
      );
  };

  const uploadImage2 = async pic => {
    const docid = returnConversationID({
      senderUID: currentUserUID,
      receiverUID: uid,
    });
    const media = {
      type: 1,
      imageUrl: pic,
      text: null,
      createdAt: firestore.FieldValue.serverTimestamp(),
      senderUID: currentUserUID,
      messageTime: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    firestore()
      .collection('messages')
      .doc(`${docid}`)
      .collection('chatMessages')
      .add(media);
    setImageSelected(false);
  };

  const renderItem = ({ item }: { item: TextMessageProps }) => {
    return <ChatMessageCard item={item} />;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          renderMiddle={
            <View style={styles.usernameAndLastSeenContainer}>
              <Text style={styles.usernameTextStyles}>@{username}</Text>
              <Text style={styles.lastSeenTextStyles}>
                {isUserOnline
                  ? Strings.online
                  : `${Strings.lastSeen} ${lastSeen}`}
              </Text>
            </View>
          }
          backButton
          onTap={() => navigation.pop()}
        />
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingViewStyles}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback>
            <View style={styles.messagesContainer}>
              <FlatList
                removeClippedSubviews
                inverted
                bounces={false}
                showsVerticalScrollIndicator={false}
                maxToRenderPerBatch={20}
                data={thread}
                initialNumToRender={15}
                keyExtractor={item => `${Math.random()}${item?.createdAt}`}
                renderItem={renderItem}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.sendMessageContainer}>
            <TextInput
              ref={textInputRef}
              onChangeText={text => setMsg(text)}
              placeholder={Strings.message}
              placeholderTextColor={Colors.white}
              style={styles.textMessageInputStyles}
            />
            <TouchableOpacity
              onPress={() => {
                selectPicture();
              }}
              activeOpacity={0.8}
              style={styles.sendIconWrapper}>
              <Image style={styles.cameraIcon} source={Icons.camera} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (msg.trim()) {
                  sendMessage(msg.trim());
                }
                textInputRef?.current?.clear();
              }}
              activeOpacity={0.8}
              style={styles.sendIconWrapper}>
              <Image style={styles.sendIcon} source={Icons.send} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <Modal
          onBackdropPress={() => setImageSelected(false)}
          isVisible={imageSelected}>
          <View>
            <Image
              style={{ width: 250, height: 300, alignSelf: 'center' }}
              source={{ uri: imageUrl }}
            />
            <TouchableOpacity
              onPress={() => {
                onHitSendImage();
              }}
              activeOpacity={0.8}
              style={{ alignSelf: 'center' }}>
              <Image style={styles.sendIcon} source={Icons.send} />
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ChatScreen;
