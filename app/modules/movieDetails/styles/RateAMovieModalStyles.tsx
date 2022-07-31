import {StyleSheet} from 'react-native';
import {Colors, moderateScale, scale, verticalScale} from '../../../themes';

const styles = StyleSheet.create({
  modalStyles: {
    alignSelf: 'center',
    shadowColor: '#474747',
    shadowRadius: 5,
    shadowOffset: {
      width: moderateScale(1),
      height: moderateScale(1),
    },
    shadowOpacity: 0.8,
  },
  container: {
    borderRadius: 10,
    paddingVertical: verticalScale(40),
    paddingHorizontal: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  closeIconTouchable: {
    position: 'absolute',
    right: scale(12),
    top: verticalScale(12),
  },
  closeIconStyles: {width: moderateScale(20), height: moderateScale(20)},
  inActiveOpacity: {opacity: 0.4},
  activeOpacity: {opacity: 1},
  viewWithHeightTwenty: {height: 20},
  rateButtonStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    backgroundColor: Colors.natureGreen,
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 2,
  },
  rateButtonInactiveStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4,
    backgroundColor: Colors.natureGreen,
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 2,
  },
  rateTextStyles: {fontWeight: '600', fontSize: moderateScale(20)},
  rateButtonAndMovieAlreadyRatedSeparator: {height: verticalScale(10)},
  alreadyRatedMovieText: {fontSize: moderateScale(14), color: 'gold'},
});

export default styles;
