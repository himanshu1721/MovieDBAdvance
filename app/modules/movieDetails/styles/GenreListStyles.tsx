import { StyleSheet } from 'react-native';
import { moderateScale, Colors } from '../../../themes/index';

const styles = StyleSheet.create({
  genreTextStyles: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: moderateScale(16),
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '78%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
