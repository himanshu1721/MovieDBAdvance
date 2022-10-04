import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../assets/images';
import { AuthErrors, AuthStrings, Strings } from '../../constants';
import { clearError } from '../../features/auth/authSlice';
import {
  loginTheUser,
  signUpGoogle,
  signUpUser,
} from '../../features/auth/services';
import { AppDispatch } from '../../features/store';
import Colors from '../../themes/Colors';
import styles from './LoginScreenStyles';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [obsecureText, setObsecureText] = useState<boolean>(true);
  const passwordInput = useRef(null);
  const [isPasswordWeak, setIsPasswordWeak] = useState<boolean>(false);
  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [isLoginScreen, setLoginScreen] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signInGoogle = async () => {
    try {
      dispatch(signUpGoogle());
    } catch (error) {
      Alert.alert(Strings.googleSignInFail);
    }
  };

  const signInPhone = async () => {
    navigation.navigate(Strings.phoneNumberScreen);
  };

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
      dispatch(
        signUpUser({
          userEmail: userEmail,
          userPassword: userPassword,
        }),
      );
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
    Alert.alert(Strings.oops, Strings.recheckEmailAndPass, [
      {
        text: Strings.OK,
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
            <Image style={styles.appLogoStyles} source={Icons.appLogo} />
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
                <View>
                  <Image
                    style={styles.passwordEyeStyles}
                    source={obsecureText ? Icons.eye : Icons.invisibleEye}
                  />
                </View>
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
          {/* <View style={styles.signInOptionsContainer}>
            <Pressable onPress={signInGoogle}>
              <Image source={Icons.google} style={styles.googleImageStyles} />
            </Pressable>
            <Pressable onPress={signInPhone}>
              <Image source={Icons.phone} style={styles.googleImageStyles} />
            </Pressable>
          </View> */}
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
