import { useSelector } from 'react-redux';

export const useCurrentUserDetails = () => {
  const currentUserUID = useSelector(state => state.auth.userUID);
  const currentEmailID = useSelector(state => state.auth.email);
  const currentUsername = useSelector(state => state.profile.username);
  return { currentUserUID, currentEmailID, currentUsername };
};
