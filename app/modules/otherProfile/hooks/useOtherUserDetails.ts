import { useSelector } from 'react-redux';

export const useOtherUserDetails = () => {
  const name = useSelector(state => state.otherProfile.name);
  const username = useSelector(state => state.otherProfile.username);
  const about = useSelector(state => state.otherProfile.about);
  const uid = useSelector(state => state.otherProfile.uid);
  const isOnline = useSelector(state => state.otherProfile.isOnline);

  return { name, username, about, isOnline, uid };
};
