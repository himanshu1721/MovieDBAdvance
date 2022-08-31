import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.chineseBlack, flex: 1 },
  subContainer: {
    flex: 1,
    alignItems: 'center',
  },
  usernameAndLastSeenContainer: {
    flex: 1,
    width: '90%',
    height: '100%',
  },
  messageTextStyles: { color: Colors.blue },
  lastSeenTextStyles: {
    fontSize: moderateScale(13),
    fontWeight: '500',
    color: Colors.white,
  },
  usernameTextStyles: {
    fontSize: moderateScale(17),
    fontWeight: '500',
    color: Colors.white,
  },
  profilePictureWrapper: {
    backgroundColor: Colors.white,
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(35),
  },
  dpAndNameContainer: {
    flexDirection: 'row',
    width: '93%',
    alignItems: 'center',
  },
  itemSeparatorProfile: { height: '3%' },

  aboutStyles: {
    fontSize: moderateScale(15),
    color: Colors.white,
    fontWeight: '400',
  },
  aboutContainer: { flexDirection: 'row', width: '90%' },
  dpAndAboutSeparator: { height: verticalScale(20) },
  usernameStyles: {
    fontSize: moderateScale(14),
    fontStyle: 'italic',
    color: Colors.white,
  },
  nameStyles: {
    fontSize: moderateScale(17),
    color: Colors.white,
    fontWeight: '500',
  },
  dpAndInfoSeparator: { width: scale(15) },
});

export default styles;
