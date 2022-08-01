import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../themes';

const styles = StyleSheet.create({
  container: {backgroundColor: '#181725', flex: 1},
  subContainer: {
    padding: moderateScale(10),
    backgroundColor: '#061422',
    alignItems: 'center',
  },
  footer: {height: moderateScale(100)},
});
export default styles;
