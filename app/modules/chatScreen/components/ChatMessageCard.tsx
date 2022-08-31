import React from 'react';
import { Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../themes';
import styles from '../styles/ChatMessageCardStyles';
import { ChatMessageCardProps } from '../types/ChatScreenTypes';

const ChatMessageCard = ({ isMe, text, messageTime }: ChatMessageCardProps) => {
  return (
    <Pressable>
      <LinearGradient
        start={{ x: 0.4, y: 0.6 }}
        end={{ x: 1.2, y: 1 }}
        colors={
          isMe
            ? [Colors.darkSlateBlue, Colors.iris]
            : [Colors.jet, Colors.outerSpace]
        }
        style={[
          !isMe ? styles.cardStylesSenderMe : styles.cardStylesSenderNotMe,
          styles.cardStyles,
        ]}>
        <View>
          <Text style={styles.textStyles}>{text}</Text>
        </View>
        <Text style={styles.messageTimeTextStyles}>{messageTime}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default ChatMessageCard;
