import { StyleSheet } from 'react-native';
import { moderateScale, scale, Colors, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  modalStyles: { backgroundColor: Colors.jet, padding: moderateScale(10) },
  favoriteMoviesWrapper: { height: '100%' },
  itemSeparatorFavoriteMovies: { height: verticalScale(20) },

  favoriteMovieCard: {
    flexDirection: 'row',
  },
  moviePosterStyles: {
    borderRadius: 5,
    width: '30%',
    aspectRatio: 2 / 3,
  },
  imageAndTextSeparator: { width: scale(10) },
  favoriteDetailsWrapper: { width: '67%' },
  favoriteMovieTitle: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: Colors.white,
  },
  favoriteMovieReleaseYear: { color: Colors.alto, fontSize: moderateScale(14) },
  titleAndGenreSeparator: { height: verticalScale(10) },
  genreFlatList: { maxHeight: verticalScale(300), maxWidth: scale(250) },
  runtime: {
    color: Colors.white,
    fontSize: moderateScale(17),
  },
});

export default styles;
