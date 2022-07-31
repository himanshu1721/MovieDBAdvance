import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../../themes';

const styles = StyleSheet.create({
  textStyles: {
    fontSize: moderateScale(21),
    fontWeight: '600',
    color: Colors.limeGreen,
  },
  ratingStyle: {flexDirection: 'row', alignItems: 'center'},
  percentStyle: {
    fontSize: moderateScale(17),
    fontWeight: '700',
    color: Colors.white,
  },
  percentSymbolStyle: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: moderateScale(9),
    opacity: 0.8,
  },
  container: {
    position: 'absolute',
    left: moderateScale(10),
    top: moderateScale(190),
    width: moderateScale(49),
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(49),
    borderRadius: moderateScale(24.5),
    backgroundColor: Colors.black,
  },

  containerMovieDetailScreen: {
    width: moderateScale(49),
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(49),
    borderRadius: moderateScale(24.5),
    backgroundColor: Colors.black,
  },
});

export default styles;
