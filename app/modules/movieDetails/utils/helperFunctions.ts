import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const useSaveUnsaveFirebase = doesMovieExists => {
  const currentUserUID = useSelector(state => state.auth.userUID);
  const movies = useSelector(state => state.detail.movieDetails);

  doesMovieExists
    ? firestore()
        .collection('users')
        .doc(currentUserUID)
        .collection('watchLater')
        .doc(`${movies?.id}`)
        .delete()
    : firestore()
        .collection('users')
        .doc(currentUserUID)
        .collection('watchLater')
        .doc(`${movies?.id}`)
        .set(movies);
};

export default useSaveUnsaveFirebase;
