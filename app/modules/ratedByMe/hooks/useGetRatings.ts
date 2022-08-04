import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyRatings } from '../../../features/ratedByMe/ratedByMeSlice';

export const useGetRatings = () => {
  const dispatch = useDispatch();
  const currentUserUID = useSelector(state => state.auth.userUID);
  const ratings = useSelector(state => state?.rating?.movieRatingsSection);
  const moviesRatedByMe = useSelector(state => state?.ratedByMe.myRatingData);

  const getUsers = async () => {
    const querySnap = await firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .collection('myRatings')
      .get();
    const x = querySnap.docs.map(docSnap => docSnap.data());
    dispatch(getMyRatings(x));
  };

  useEffect(() => {
    console.log('movie added');
    getUsers();
  }, [ratings]);

  return { moviesRatedByMe };
};
