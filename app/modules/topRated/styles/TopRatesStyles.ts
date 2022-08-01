import {StyleSheet} from 'react-native';
import { verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#061422',
    backgroundColor: '#000',
    width: '100%',
    alignItems: 'center',
  },
  itemSeparator: {height: verticalScale(20)},
  loadingContainer: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
