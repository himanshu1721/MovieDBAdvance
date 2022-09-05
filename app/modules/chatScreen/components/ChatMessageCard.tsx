import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useCurrentUserDetails } from '../../../hooks/useCurrentUID';
import { Colors, moderateScale, verticalScale } from '../../../themes';
import styles from '../styles/ChatMessageCardStyles';
import { ChatMessageCardProps } from '../types/ChatScreenTypes';

const ChatMessageCard = ({ item }) => {
  const { currentUserUID } = useCurrentUserDetails();

  return (
    <Pressable>
      <LinearGradient
        start={{ x: 0.4, y: 0.6 }}
        end={{ x: 1.2, y: 1 }}
        colors={
          item?.senderUID === currentUserUID
            ? [Colors.darkSlateBlue, Colors.iris]
            : [Colors.jet, Colors.outerSpace]
        }
        style={[
          item?.senderUID !== currentUserUID
            ? styles.cardStylesSenderMe
            : styles.cardStylesSenderNotMe,
          styles.cardStyles,
        ]}>
        {item?.type === 1 ? (
          <View>
            <Image
              // source={{item?.imageUrl ?  uri: item?.imageUrl :}}
              source={item?.imageUrl ? { uri: item?.imageUrl } : null}
              style={{
                marginBottom: 5,
                borderRadius: moderateScale(5),
                width: '100%',
                height: verticalScale(200),
              }}
            />
          </View>
        ) : (
          <Text style={styles.textStyles}>{item?.text}</Text>
        )}
        {/* <View>
          <Text style={styles.textStyles}>{item?.text}</Text>
        </View> */}
        <Text style={styles.messageTimeTextStyles}>{item?.messageTime}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default ChatMessageCard;
