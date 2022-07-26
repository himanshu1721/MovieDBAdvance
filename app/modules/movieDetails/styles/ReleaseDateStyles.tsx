import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale } from '../../../themes';

const styles = StyleSheet.create({
  ratedTextStyles: {
    color: Colors.starDust,
    fontWeight: '600',
    fontSize: moderateScale(13),
  },
  dateStyles: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: moderateScale(15),
  },
  subContainer: { flexDirection: 'row', alignItems: 'center' },
  ratedContainer: {
    alignItems: 'center',
    borderRadius: moderateScale(3),
    width: scale(30),
    height: moderateScale(20),
    borderWidth: moderateScale(2),
    margin: moderateScale(5),
    borderColor: Colors.starDust,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
