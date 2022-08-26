import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(5),
    flex: 1,
    borderRadius: moderateScale(5),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageStyles: {
    borderRadius: moderateScale(5),
    width: '100%',
    aspectRatio: 2 / 3,
  },
  nameTextStyles: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: Colors.white,
  },
  nameWrapper: { paddingVertical: verticalScale(5) },
});

export default styles;
