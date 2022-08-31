import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useOtherUserDetails } from '../../otherProfile/hooks/useOtherUserDetails';

export const useChatDetails = () => {
  const [isUserOnline, setIsUserOnline] = useState<boolean>(false);
  const [lastSeen, setLastSeen] = useState<string>('');
  const { uid } = useOtherUserDetails();

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

  return { isUserOnline, lastSeen };
};
