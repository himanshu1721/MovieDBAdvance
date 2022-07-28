import {StyleSheet} from 'react-native';
import {Colors, verticalScale, moderateScale} from '../../../themes';

const styles = StyleSheet.create({
  subContainer: {flex: 1, justifyContent: 'center'},
  itemSeparator: {
    height: verticalScale(9),
  },
  movieSaveIconWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieSaveIconStyles: {
    height: 28,
    width: 28,
  },
  userScoreAndPlayContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  componentSeparator: {
    width: moderateScale(1.3),
    opacity: 0.47,
    height: verticalScale(25),
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  rateMovieTextStyles: {fontWeight: '500', color: '#2657e0'},
  rateMovieWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1,
  },
  ratingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainerWrapper: {
    marginVertical: 15,
    flexDirection: 'row',
  },
});

export default styles;
