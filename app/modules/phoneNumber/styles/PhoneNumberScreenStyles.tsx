import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: Colors.darkBlue,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
  },
  backButtonImageStyles: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  inputAndButtonSeparator: { height: verticalScale(20) },
  header: {
    position: 'absolute',
    top: 0,
    height: verticalScale(68),
    flexDirection: 'row',
    width: '100%',
  },
  extraViewHeader: { flex: 5 },
  backButtonStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '90%',
    padding: moderateScale(10),
  },
  viewWithHeightForty: { height: verticalScale(18) },
  countryCodeTextStyles: { fontSize: moderateScale(18, 0.4) },
  phoneNumberInputContainer: {
    flexDirection: 'row',
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(17),
    width: '100%',
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1.2),
    borderColor: Colors.blue,
    backgroundColor: Colors.gallery,
  },
  extraViewBottom: { height: '10%' },
  phoneAndOTPSeparator: { height: verticalScale(10) },
  countryCodeContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  codeAndPhoneSeparator: { width: scale(10) },
  emailTextInputStyles: {
    letterSpacing: 1,
    width: '100%',
    fontSize: moderateScale(18, 0.4),
    height: verticalScale(35),
    backgroundColor: Colors.gallery,
  },
  appLogoStyles: { width: moderateScale(90), height: moderateScale(64) },
  emailTextInputStylesFocus: {
    letterSpacing: 1,
    fontSize: moderateScale(17, 0.4),
    height: '100%',
    flex: 1,
    width: '100%',
  },
  disabledLoginButtonStyles: {
    opacity: 0.3,
    alignSelf: 'center',
    height: verticalScale(35),
    borderRadius: moderateScale(6),
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    backgroundColor: Colors.natureGreen,
  },
  loginButtonStyles: {
    height: verticalScale(35),
    alignSelf: 'center',
    borderRadius: moderateScale(6),
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    backgroundColor: Colors.natureGreen,
  },
  loginStyles: {
    fontSize: moderateScale(20),
    color: Colors.white,
    fontWeight: '600',
  },
});

export default styles;
