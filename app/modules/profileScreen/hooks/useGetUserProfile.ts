import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../../features/profile/profileSlice';
import { useCurrentUserDetails } from '../../../hooks/useCurrentUID';

export const useGetUserProfile = () => {
  const dispatch = useDispatch();
  const { currentUserUID } = useCurrentUserDetails();

  const getUserProfileDetails = async () => {
    const user = await firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .get();
    dispatch(updateProfile(user.data()));
  };

  return { getUserProfileDetails };
};
