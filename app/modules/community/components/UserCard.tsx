import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { moderateScale } from '../../../themes';
import styles from '../styles/UserCardStyles';
import { OtherUserDetailsProps } from '../types/OtherUserDetails';

const UserCard = ({ item }: OtherUserDetailsProps) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('OtherProfile', {
          uid: item?.uid,
        });
      }}
      style={styles.container}>
      <View style={styles.dpAndDetailContainer}>
        <View style={styles.profilePictureContainer}>
          <SvgUri
            width={moderateScale(80)}
            height={moderateScale(80)}
            uri={`https://avatars.dicebear.com/api/croodles/${item?.username}20.svg`}
          />
          {item?.isOnline ? <View style={styles.onlineGreenCircle} /> : null}
        </View>
        <View style={styles.nameAndUsernameWrapper}>
          <Text style={styles.nameStyles}>{item?.name}</Text>
          <Text style={styles.usernameStyles}>@{item?.username}</Text>
          <View style={styles.itemSeparator} />
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTextStyles}>{item?.about}</Text>
      </View>
    </Pressable>
  );
};

export default UserCard;
