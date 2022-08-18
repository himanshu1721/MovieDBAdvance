import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { UserCredentials } from './types';

const generateRandom = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substring(0, 10);
};

export const loginTheUserApi = ({
  userEmail,
  userPassword,
}: UserCredentials) => {
  return auth().signInWithEmailAndPassword(userEmail, userPassword);
};

export const signUpUserApi = ({ userEmail, userPassword }: UserCredentials) => {
  return auth().createUserWithEmailAndPassword(userEmail, userPassword);
};

export const signInUserGoogleApi = async () => {
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
  return userInfo;
};

export const createUserAccount = async ({
  userEmail,
  userUID,
}: {
  userEmail: string | null;
  userUID: string;
}) => {
  await firestore().collection('users').doc(userUID).set({
    email: userEmail,
    uid: userUID,
    isOnline: true,
    favoriteGenres: [],
    favoriteMovies: [],
    about: 'Hello, I am new to MovieDB',
    name: 'New User',
    username: generateRandom(),
    lastSeen: '',
  });
};
