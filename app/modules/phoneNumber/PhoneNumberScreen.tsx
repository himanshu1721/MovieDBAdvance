import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import Icons from '../../assets/images';
import { Strings } from '../../constants';
import { signUpPhone } from '../../features/auth/services';
import { Colors } from '../../themes';
import styles from './styles/PhoneNumberScreenStyles';

const PhoneNumberScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOTP] = useState<string>('');
  const [confirm, setConfirm] = useState();

  const dismissKeyboard = (): void => {
    Keyboard.dismiss();
  };

  const confirmVerificationCode = async (code: string) => {
    try {
      const result = await confirm?.confirm(code);
      dispatch(signUpPhone({ uid: result.user.uid }));
      setConfirm(null);
    } catch (error) {
      Alert.alert(Strings.invalidCode);
    }
  };

  const signInPhone = async (phoneNumberTyped: string) => {
    try {
      const result = await auth().signInWithPhoneNumber(
        `+91 ${phoneNumberTyped}`,
      );
      setConfirm(result);
    } catch (error) {
      Alert.alert(Strings.invalidPhone);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Pressable
                onPress={() => navigation.pop()}
                style={styles.backButtonStyles}>
                <Image
                  source={Icons.back}
                  style={styles.backButtonImageStyles}
                />
              </Pressable>
              <View style={styles.extraViewHeader} />
            </View>
            <View>
              <Image style={styles.appLogoStyles} source={Icons.appLogo} />
            </View>
            <View style={styles.viewWithHeightForty} />
            <View style={styles.subContainer}>
              <View style={styles.phoneNumberInputContainer}>
                <View style={styles.countryCodeContainer}>
                  <Text style={styles.countryCodeTextStyles}>
                    {Strings.indiaCountryCode}
                  </Text>
                </View>
                <View style={styles.codeAndPhoneSeparator} />
                <TextInput
                  onChangeText={text => setPhoneNumber(text)}
                  maxLength={10}
                  keyboardType="phone-pad"
                  placeholder={Strings.enterPhoneNumber}
                  placeholderTextColor={Colors.scorpion}
                  style={styles.emailTextInputStylesFocus}
                />
              </View>
              <View style={styles.phoneAndOTPSeparator} />
              {confirm && (
                <View style={styles.phoneNumberInputContainer}>
                  <TextInput
                    onChangeText={text => setOTP(text)}
                    maxLength={10}
                    keyboardType="phone-pad"
                    placeholder={Strings.enterOTP}
                    placeholderTextColor={Colors.scorpion}
                    style={styles.emailTextInputStyles}
                  />
                </View>
              )}
              <View style={styles.inputAndButtonSeparator} />
              {!confirm ? (
                <TouchableOpacity
                  disabled={phoneNumber.length < 10}
                  onPress={() => signInPhone(phoneNumber)}
                  activeOpacity={0.8}
                  style={
                    phoneNumber.length < 10
                      ? styles.disabledLoginButtonStyles
                      : styles.loginButtonStyles
                  }>
                  <Text style={styles.loginStyles}>{Strings.sendCode}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  disabled={otp.length < 5}
                  onPress={() => confirmVerificationCode(otp)}
                  activeOpacity={0.8}
                  style={
                    otp.length < 5
                      ? styles.disabledLoginButtonStyles
                      : styles.loginButtonStyles
                  }>
                  <Text style={styles.loginStyles}>{Strings.confirm}</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.extraViewBottom} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PhoneNumberScreen;
