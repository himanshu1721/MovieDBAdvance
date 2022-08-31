import Strings from '../constants/Strings';

interface GenreProp {
  id: number;
  name: string;
}

interface ConversationIDProps {
  senderUID: string;
  receiverUID: string;
}

//returns the genre list from genre object.
export const getGenreList = (
  array: any[] = [{ id: 1, name: Strings.streaming }],
): string => {
  return array
    .map((x: GenreProp) => x.name)
    .join(Strings.commaWithLeadingSpace);
};

//returns a consistent conversationID by comparing sender and receiver UID
export const returnConversationID = ({
  senderUID,
  receiverUID,
}: ConversationIDProps) => {
  const docId =
    senderUID > receiverUID
      ? receiverUID + '-' + senderUID
      : senderUID + '-' + receiverUID;
  return docId;
};
