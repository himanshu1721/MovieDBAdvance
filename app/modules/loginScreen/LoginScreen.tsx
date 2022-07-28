import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {Icons, Images} from '../../assets';
import {AuthErrors, AuthStrings, Strings} from '../../constants';
// import AuthAction from '../../redux/AuthRedux';
// import {regexPassword} from '../../services/Utils';
import {clearError, loginTheUser} from '../../features/auth/authSlice';
import Colors from '../../themes/Colors';
import styles from './LoginScreenStyles';

interface LoginScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [obsecureText, setObsecureText] = useState(true);
  const passwordInput = useRef(null);
  const [isPasswordWeak, setIsPasswordWeak] = useState<boolean>(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoginScreen, setLoginScreen] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);

  const regexPassword = new RegExp(
    '^(((?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9])))(?=.{8,})',
  );

  const textInputSubmitEmail = (): void => {
    passwordInput?.current?.focus();
  };

  const dismissKeyboard = (): void => {
    Keyboard.dismiss();
  };

  const validateCredentials = (userEmail: string, userPassword: string) => {
    if (userEmail !== '' && userPassword !== '') {
      signIn(userEmail, userPassword);
    }
  };

  const signIn = async (userEmail: string, userPassword: string) => {
    try {
      dispatch(
        loginTheUser({
          userEmail: userEmail,
          userPassword: userPassword,
        }),
      );
    } catch (error) {}
  };

  const validateEmailAndPassword = (
    userEmail: string,
    userPassword: string,
  ) => {
    if (!regexPassword.test(userPassword)) {
      setIsPasswordWeak(true);
    } else {
      setIsPasswordWeak(false);
      createUser(userEmail, userPassword);
    }
  };

  const createUser = async (userEmail: string, userPassword: string) => {
    try {
      const result = await auth().createUserWithEmailAndPassword(
        userEmail,
        userPassword,
      );
      firestore().collection('users').doc(result.user.uid).set({
        email: userEmail,
        uid: result.user.uid,
      });
      // firestore()
      //   .collection('users')
      //   .doc(result.user.uid)
      //   .collection('watchLater')
      //   .add({name: 'Himanshu'});
      firestore()
        .collection('users')
        .doc(result.user.uid)
        .collection('myRatings')
        .add({name: 'Himanshu22'});
      setPassword('');
      Alert.alert(AuthStrings.success, AuthStrings.accountSuccessfullyCreated);
      setLoginScreen(true);
    } catch (error) {
      if (error?.code === AuthErrors.EMAIL_ALREADY_IN_USE) {
        Alert.alert(AuthStrings.emailAlreadyUsed);
      }
      if (error?.code === AuthErrors.INVALID_EMAIL) {
        Alert.alert(AuthStrings.enterValidEmail);
      }
    }
  };

  const showAlert = () =>
    Alert.alert('Alert Title', 'Please recheck you email and password', [
      {
        text: 'Ok',
        onPress: () => dispatch(clearError()),
      },
    ]);

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {loading && (
          <View style={styles.loadingScreen}>
            {<ActivityIndicator size={'large'} color="black" />}
          </View>
        )}
        {error && <View style={styles.loadingScreen}>{showAlert()}</View>}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingViewStyles}>
          <View>
            {/* <Image style={styles.appLogoStyles} source={Images.appLogo} /> */}
          </View>
          <View style={styles.viewWithHeightForty} />
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={textInputSubmitEmail}
            returnKeyType="next"
            keyboardType="email-address"
            placeholder={Strings.enterEmail}
            placeholderTextColor={Colors.scorpion}
            style={
              emailFocus
                ? styles.emailTextInputStylesFocus
                : styles.emailTextInputStyles
            }
          />
          {isPasswordWeak && !isLoginScreen && (
            <View style={styles.weakPasswordContainer}>
              <Text style={styles.weakPasswordTextStyles}>
                {Strings.createStrongPassword}
              </Text>
            </View>
          )}
          <View style={styles.viewWithHeightTen} />
          <View
            style={
              passwordFocus
                ? styles.passwordViewStylesFocus
                : styles.passwordViewStyles
            }>
            <TextInput
              placeholderTextColor={Colors.scorpion}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              value={password}
              onChangeText={text => setPassword(text)}
              ref={passwordInput}
              blurOnSubmit
              returnKeyType="done"
              secureTextEntry={obsecureText}
              placeholder={Strings.enterPassword}
              style={styles.passwordTextInput}
            />
            <TouchableOpacity
              onPress={() => {
                setObsecureText(!obsecureText);
              }}>
              {password === '' ? (
                <View style={styles.emptyViewWhenNoPasswordIsEntered} />
              ) : (
                // <Image
                //   style={styles.passwordEyeStyles}
                //   source={obsecureText ? Icons.eye : Icons.invisibleEye}
                // />
                <View></View>
              )}
            </TouchableOpacity>
          </View>
          {passwordFocus && !isLoginScreen && (
            <View style={styles.passwordValidationContainer}>
              <Text style={styles.passwordValidationTextStyles}>
                {Strings.passwordValidation}
              </Text>
            </View>
          )}
          <View style={styles.viewWithHeightThirty} />
          <TouchableOpacity
            disabled={password.length < 8}
            onPress={() => {
              isLoginScreen
                ? validateCredentials(email, password)
                : validateEmailAndPassword(email, password);
              dismissKeyboard();
            }}
            activeOpacity={0.8}
            style={
              password.length > 7
                ? styles.loginButtonStyles
                : styles.disabledLoginButtonStyles
            }>
            <Text style={styles.loginStyles}>
              {isLoginScreen ? `${Strings.login}` : `${Strings.signUp}`}
            </Text>
          </TouchableOpacity>
          <View style={styles.viewWithHeightTwenty} />
          {isLoginScreen && (
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.forgotPasswordStyles}>
                {Strings.forgotPassword}
              </Text>
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
        <View style={styles.dontHaveAccountContainer}>
          <Text style={styles.dontHaveAccountStyles}>
            {isLoginScreen
              ? `${Strings.dontHaveAccount}`
              : `${Strings.alreadyHaveAccount}`}
          </Text>
          <TouchableOpacity
            onPress={() => {
              isLoginScreen ? setLoginScreen(false) : setLoginScreen(true);
            }}
            activeOpacity={0.8}>
            <Text style={styles.signUpText}>
              {isLoginScreen ? `${Strings.signUp}` : `${Strings.login}`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
