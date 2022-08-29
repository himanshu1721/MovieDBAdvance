import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.raisinBlack,
    width: '97%',
    alignSelf: 'center',
  },
  imageStyles: {
    aspectRatio: 16 / 9,
    width: '100%',
  },
  titleStyles: {
    fontSize: moderateScale(20),
    color: Colors.white,
    fontWeight: '400',
  },
  movieYear: {
    color: Colors.alto,
    fontSize: moderateScale(16),
    fontWeight: '300',
  },
  overviewStyles: {
    letterSpacing: 0.3,
    fontSize: moderateScale(14),
    fontWeight: '300',
    color: Colors.white,
  },
  threeDotsStyles: {
    color: Colors.white,
    letterSpacing: 0.3,
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
  titleAndYearWrapper: { alignItems: 'center' },
  heightFive: { height: verticalScale(5) },
  heightTen: { height: verticalScale(10) },
});

export default styles;
