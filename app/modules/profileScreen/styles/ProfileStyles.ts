import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  dpContainer: {
    backgroundColor: Colors.white,
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(35),
  },
  birthdayIcon: { height: moderateScale(30), width: moderateScale(30) },
  dpAndEditProfileContainer: { flexDirection: 'row' },
  container: { backgroundColor: Colors.raisinBlack, flex: 1 },
  subContainer: {
    marginTop: verticalScale(20),
    flex: 1,
    alignItems: 'center',
  },
  dpAndNameContainer: {
    width: '60%',
  },
  favoritesAndButtonSeparator: { width: scale(10) },
  profileAndFavoriteSeparator: { height: '100%' },
  favoritesText: {
    fontSize: moderateScale(20),
    letterSpacing: 1,
    fontWeight: '600',
    color: 'white',
  },
  favoritesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    marginTop: verticalScale(30),
    width: '100%',
  },
  editProfileText: {
    fontSize: moderateScale(15),
    width: '93%',
    fontWeight: '500',
    color: Colors.white,
  },
  editProfileButtonContainer: {
    alignItems: 'center',
    width: '33%',
  },
  editProfileButton: {
    width: '90%',
    paddingHorizontal: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.outerSpace,
    borderRadius: moderateScale(20),
    borderWidth: scale(1),
    borderColor: Colors.alto,
    paddingVertical: moderateScale(5),
  },
  aboutStyles: {
    fontSize: moderateScale(14),
    color: Colors.white,
    fontWeight: '400',
  },
  aboutContainer: { flexDirection: 'row', width: '93%' },
  dpAndAboutSeparator: { height: verticalScale(10) },
  usernameStyles: {
    fontSize: moderateScale(14),
    fontStyle: 'italic',
    color: Colors.white,
  },
  nameStyles: {
    fontSize: moderateScale(17),
    color: 'white',
    fontWeight: '500',
  },
  dummyDP: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: 40,
    backgroundColor: Colors.pink,
  },
  dpAndInfoSeparator: { height: verticalScale(10) },
  centeredView: {
    backgroundColor: Colors.outerSpace,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '70%',
  },
  modalView: {
    margin: moderateScale(20),
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: moderateScale(35),
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: moderateScale(10),
    elevation: 2,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: verticalScale(15),
    textAlign: 'center',
  },

  modal: {
    flex: 1,
    width: '100%',
  },
  modalContainer: {
    padding: moderateScale(10),
    flex: 1,
    height: '60%',
    backgroundColor: Colors.outerSpace,
  },
  closeAndDoneContainer: {
    flexDirection: 'row',
    height: '7%',
    marginBottom: '4%',
    width: '100%',
  },
  closeButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  closeButton: { width: moderateScale(30), height: moderateScale(30) },
  extraViewTop: {
    flex: 7,
  },
  showFavoriteButton: {
    borderRadius: 5,
    paddingHorizontal: scale(10),
    paddingVertical: 3,
    backgroundColor: Colors.pink,
  },
  dobContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '93%',
  },
  dateOfBirthTextStyles: {
    alignSelf: 'flex-start',
    color: Colors.white,
    fontSize: moderateScale(15),
    fontWeight: '400',
  },
  datePickerContainer: { alignSelf: 'center' },
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
  textInputSeparator: { height: verticalScale(30) },
});

export default styles;
