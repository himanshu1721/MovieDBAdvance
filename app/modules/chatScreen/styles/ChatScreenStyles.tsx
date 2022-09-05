import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.chineseBlack, flex: 1 },
  textMessageInputStyles: {
    height: verticalScale(30),
    padding: moderateScale(10),
    flex: 1,
    marginRight: scale(10),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.outerSpace,
    color: Colors.white,
  },
  usernameAndLastSeenContainer: {
    flex: 1,
    width: '90%',
    height: '100%',
  },
  cameraIcon: { width: moderateScale(30), height: moderateScale(30) },
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
  sendIconWrapper: { padding: moderateScale(5) },
  sendMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  keyboardAvoidingViewStyles: { flex: 1 },
});

export default styles;
