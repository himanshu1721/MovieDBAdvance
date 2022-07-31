import {StyleSheet} from 'react-native';
import {Colors, moderateScale, scale, verticalScale} from '../../../../themes';

const styles = StyleSheet.create({
  modalStyles: {
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowRadius: 5,
    shadowOffset: {
      width: moderateScale(1),
      height: moderateScale(1),
    },
    shadowOpacity: 0.6,
  },
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    // height: 400,
  },
  imageStyles: {
    aspectRatio: 16 / 9,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
  },
  heightTen: {height: verticalScale(10)},
  titleAndOverviewContainer: {paddingHorizontal: scale(10)},
  titleStyles: {fontSize: moderateScale(20), color: 'black', fontWeight: '600'},
  overviewStyles: {
    color: '#222',
    letterSpacing: 0.3,
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
  releaseYearStyles: {
    color: '#474747',
    fontSize: moderateScale(17),
    fontWeight: '500',
  },
});

export default styles;
