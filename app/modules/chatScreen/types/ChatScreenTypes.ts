import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface ChatMessageCardProps {
  isMe: boolean;
  text: string;
  messageTime: string;
}

export interface TextMessageProps {
  text: string;
  senderUID: string;
  messageTime: string;
  createdAt: FirebaseFirestoreTypes.Timestamp;
}
