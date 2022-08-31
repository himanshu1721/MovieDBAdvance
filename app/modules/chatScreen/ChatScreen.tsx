import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import {
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
        text: textMessage,
        createdAt: firestore.FieldValue.serverTimestamp(),
        senderUID: currentUserUID,
        messageTime: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
  };

  const renderItem = ({ item }: { item: TextMessageProps }) => {
    return (
      <ChatMessageCard
        isMe={item?.senderUID === currentUserUID}
        text={item?.text}
        messageTime={item?.messageTime}
      />
    );
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
                keyExtractor={item => String(item.createdAt)}
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
                if (msg.trim()) {
                  sendMessage(msg.trim());
                }
                textInputRef?.current?.clear();
                setMsg('');
              }}
              activeOpacity={0.8}
              style={styles.sendIconWrapper}>
              <Image style={styles.sendIcon} source={Icons.send} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ChatScreen;
