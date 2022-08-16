import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale, Colors } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: moderateScale(20),
    alignItems: 'center',
  },
  headingAndDescriptionSeparator: { height: verticalScale(20) },
  extraView: { height: '30%' },
  headingTextStyles: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: moderateScale(25),
  },
  description: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: moderateScale(21),
  },
});

export default styles;
