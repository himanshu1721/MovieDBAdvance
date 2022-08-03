import auth from '@react-native-firebase/auth';
import { UserCredentials } from './types';

export const loginTheUserApi = ({
  userEmail,
  userPassword,
}: UserCredentials) => {
  return auth().signInWithEmailAndPassword(userEmail, userPassword);
};

export const signUpUserApi = ({ userEmail, userPassword }: UserCredentials) => {
  return auth().createUserWithEmailAndPassword(userEmail, userPassword);
};
