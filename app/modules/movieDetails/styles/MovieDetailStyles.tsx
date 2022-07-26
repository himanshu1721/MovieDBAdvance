import { StyleSheet } from 'react-native';
import { Colors, verticalScale, moderateScale, scale } from '../../../themes';

const styles = StyleSheet.create({
  subContainer: { flex: 1, justifyContent: 'center' },
  itemSeparator: {
    height: verticalScale(5),
  },
  watchTrailerButton: {
    flexDirection: 'row',
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  watchTrailerTextStyles: { color: 'white', fontSize: moderateScale(14) },
  ratingAndPeopleSeparator: { width: scale(5) },
  totalRatings: {
    fontSize: moderateScale(20),
    color: 'white',
    fontWeight: '400',
  },
  favoriteExtraViewOne: { flex: 0.4 },
  favoriteExtraViewTwo: { flex: 3 },
  movieSaveIconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImageWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  movieSaveIconStyles: {
    height: moderateScale(28),
    width: moderateScale(28),
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
  extraViewWatchTrailer: { flex: 0.1 },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  rateMovieTextStyles: {
    fontWeight: '500',
    fontSize: moderateScale(13),
    color: '#2657e0',
  },
  rateMovieWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateMovieWrapperTV: {
    opacity: 0.4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainerWrapper: {
    marginVertical: verticalScale(15),
    marginTop: verticalScale(5),
    flexDirection: 'row',
  },
  inActiveSaveButton: { opacity: 0.4 },
  activeSaveButton: { opacity: 1 },

  addToFavorites: {
    flexDirection: 'row',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: verticalScale(40),
    backgroundColor: '#eee',
  },
  heartImage: { width: moderateScale(30), height: moderateScale(30) },
  heartAndTextSeparator: { width: 10 },
  addToFavoritesTextStyles: {
    fontWeight: '600',
    color: 'black',
    fontSize: moderateScale(19),
  },
});

export default styles;
