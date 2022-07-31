import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    // padding: moderateScale(10),
    borderRadius: 10,
    backgroundColor: '#222',
    width: '100%',
  },
  imageStyles: {
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    width: '100%',
    aspectRatio: 16 / 9,
    // height: 200,
  },
  titleStyles: {fontSize: moderateScale(20), fontWeight: '600', color: 'white'},
  releaseYearStyles: {
    color: '#ccc',
    fontSize: moderateScale(17),
    fontWeight: '500',
  },
  itemSeparator: {height: verticalScale(5)},
  ratingWrapper: {flexDirection: 'row'},
  ratingContainer: {flex: 1, paddingHorizontal: 0},
  extraViewNearRating: {flex: 1.1},
  genreListContainer: {
    flexDirection: 'row',
    maxHeight: verticalScale(300),
    width: '100%',
  },
});

export default styles;
