import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { Strings } from '../../constants';
import { getOtherUserProfile } from '../../features/otherProfile/otherProfileSlice';
import { moderateScale } from '../../themes';
import HeaderComponent from '../movieDetails/components/Header';
import { useOtherUserDetails } from './hooks/useOtherUserDetails';
import styles from './styles/OtherProfileStyles';

const OtherProfile = ({ route }) => {
  const dispatch = useDispatch();
  const { name, username, about, uid } = useOtherUserDetails();
  const [isUserOnline, setIsUserOnline] = useState<boolean>(false);
  const [lastSeen, setLastSeen] = useState<string>('');

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(`${uid}`)
      .onSnapshot(documentSnapshot => {
        setIsUserOnline(documentSnapshot?.data()?.isOnline);
        setLastSeen(documentSnapshot?.data()?.lastSeen);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [uid]);

  useEffect(() => {
    dispatch(getOtherUserProfile({ id: route?.params?.uid }));
  }, [route?.params?.uid]);

  const navigation = useNavigation();
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
        <View style={styles.itemSeparatorProfile} />
        <View style={styles.subContainer}>
          <View style={styles.dpAndNameContainer}>
            <View style={styles.profilePictureWrapper}>
              <SvgUri
                width={moderateScale(70)}
                height={moderateScale(70)}
                uri={`https://avatars.dicebear.com/api/croodles/${username}20.svg`}
              />
            </View>
            <View style={styles.dpAndInfoSeparator} />
            <View>
              <Text style={styles.nameStyles}>{name}</Text>
              <Text style={styles.usernameStyles}>@{username}</Text>
            </View>
          </View>
          <View style={styles.dpAndAboutSeparator} />
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutStyles}>{about}</Text>
          </View>
          <View style={styles.dpAndAboutSeparator} />
          <TouchableOpacity
            onPress={() => navigation.navigate(Strings.chatScreen)}>
            <Text style={styles.messageTextStyles}>{Strings.message}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OtherProfile;
