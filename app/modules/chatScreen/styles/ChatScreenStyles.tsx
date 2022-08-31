import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.chineseBlack, flex: 1 },
  textMessageInputStyles: {
    height: verticalScale(30),
    padding: moderateScale(10),
    width: '80%',
    borderRadius: moderateScale(20),
    backgroundColor: Colors.outerSpace,
    color: Colors.white,
  },
  usernameAndLastSeenContainer: {
    flex: 1,
    width: '90%',
    height: '100%',
  },
  sendIcon: { width: moderateScale(30), height: moderateScale(30) },
  lastSeenTextStyles: {
    fontSize: moderateScale(13),
    fontWeight: '500',
    color: Colors.white,
  },
  messagesContainer: { flex: 1, padding: moderateScale(10) },
  usernameTextStyles: {
    fontSize: moderateScale(17),
    fontWeight: '500',
    color: Colors.white,
  },
  sendIconWrapper: { padding: moderateScale(10) },
  sendMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardAvoidingViewStyles: { flex: 1 },
});

export default styles;
