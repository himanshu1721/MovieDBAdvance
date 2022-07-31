import {StyleSheet} from 'react-native';

import {Colors, scale, moderateScale, verticalScale} from '../../themes';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  profileDetail: {
    marginVertical: verticalScale(10),
  },
  emailText: {
    color: Colors.grey,
    fontSize: moderateScale(13),
    fontWeight: '500',
    letterSpacing: 0.5,
    marginLeft: scale(10),
  },
  usernameText: {
    color: Colors.white,
    fontSize: moderateScale(18),
    marginLeft: scale(10),
    fontWeight: '500',
  },
  touchableText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: moderateScale(16),
    marginLeft: scale(15),
  },
  appLogo: {
    alignSelf: 'center',
    marginVertical: verticalScale(50),
    height: moderateScale(100),
    width: moderateScale(100),
  },
  iconStyle: {
    height: moderateScale(35),
    width: moderateScale(35),
  },
  touchableView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(14),
  },
  divider: {
    backgroundColor: Colors.grey,
    width: '100%',
    height: verticalScale(1),
    alignSelf: 'center',
    marginVertical: verticalScale(10),
  },
});

export default styles;
