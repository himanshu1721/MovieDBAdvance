import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale } from '../../../themes';

const styles = StyleSheet.create({
  userScoreTextStyles: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
  itemSeparator: { width: scale(15) },
  container: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  extraView: { flex: 1 },
  subContainer: { flexDirection: 'row', alignItems: 'center' },
});

export default styles;
