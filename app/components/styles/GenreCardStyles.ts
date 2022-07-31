import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../themes';

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(5),
    paddingVertical: verticalScale(3),
    marginRight: scale(5),
    paddingHorizontal: scale(5),
    borderRadius: 5,
    backgroundColor: '#fb4c93',
  },
  textStyles: {
    fontWeight: '600',
    letterSpacing: 0.2,
    color: 'white',
    fontSize: moderateScale(15),
  },
});

export default styles;
