import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../../themes';

const styles = StyleSheet.create({
  titleStyleTrailer: {
    flex: 3,
    fontSize: moderateScale(22),
    fontWeight: '600',
    color: Colors.white,
  },
  titleStyle: {
    flex: 3,
    fontSize: moderateScale(22),
    fontWeight: '600',
    color: Colors.black,
  },
});

export default styles;
