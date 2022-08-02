import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#222',
    width: '100%',
  },
  runtimeStyles: { color: 'white', fontSize: moderateScale(17) },
  imageStyles: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  titleStyles: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: 'white',
  },
  releaseYearStyles: {
    color: '#ccc',
    fontSize: moderateScale(17),
    fontWeight: '500',
  },
  itemSeparator: { height: verticalScale(5) },
  ratingWrapper: { justifyContent: 'flex-start', flexDirection: 'row' },
  ratingContainer: { alignItems: 'flex-start', flex: 1, paddingHorizontal: 0 },
  extraViewNearRating: { flex: 1.1 },
  genreListContainer: {
    flexDirection: 'row',
    maxHeight: verticalScale(300),
    width: '100%',
  },
});

export default styles;
