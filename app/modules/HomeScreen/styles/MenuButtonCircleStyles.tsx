import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../../themes';

const styles = StyleSheet.create({
  dotContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  roundMenuItemFooterAndHeader: {flex: 1},
  roundMenuDot: {
    opacity: 0.8,
    backgroundColor: Colors.black,
    height: moderateScale(4),
    width: moderateScale(4),
    borderRadius: moderateScale(4 / 2),
  },
  container: {
    flex: 1,
    height: moderateScale(24),
    flexDirection: 'row',
    width: moderateScale(24),
    borderRadius: moderateScale(24 / 2),
    justifyContent: 'center',
    top: moderateScale(12),
    position: 'absolute',
    right: moderateScale(7),
    alignItems: 'center',
    backgroundColor: Colors.white,
    opacity: 0.68,
  },
});

export default styles;
