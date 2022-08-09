import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: { backgroundColor: '#222', flex: 1 },
  subContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dpAndNameContainer: {
    flexDirection: 'row',
    width: '93%',
    alignItems: 'center',
  },

  //
  favoritesText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: '600',
    color: 'white',
  },
  favoritesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 30,
    width: '100%',
  },
  editProfileText: {
    fontSize: moderateScale(15),
    width: '93%',
    fontWeight: '500',
    color: 'white',
  },
  editProfileButton: {
    width: '100%',
    paddingHorizontal: scale(20),
    backgroundColor: '#474747',
    borderRadius: moderateScale(5),
    padding: moderateScale(5),
  },
  aboutStyles: {
    fontSize: moderateScale(14),
    color: 'white',
    fontWeight: '400',
  },
  aboutContainer: { flexDirection: 'row', width: '90%' },
  dpAndAboutSeparator: { height: verticalScale(20) },
  usernameStyles: {
    fontSize: moderateScale(14),
    fontStyle: 'italic',
    color: 'white',
  },
  nameStyles: {
    fontSize: moderateScale(17),
    color: 'white',
    fontWeight: '500',
  },
  dummyDP: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'pink',
  },
  dpAndInfoSeparator: { width: scale(15) },
  centeredView: {
    backgroundColor: '#474747',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    width: '100%',
    height: '70%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  //Modal
  modal: {
    flex: 1,
    width: '100%',
  },
  doneButtonTextStyles: { fontSize: 15, fontWeight: '500', color: 'black' },
  doneButton: {
    width: '50%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
    borderRadius: 5,
    padding: 5,
  },

  modalContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: '#474747',
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
  closeButton: { width: 30, height: 30 },
  extraViewTop: {
    flex: 7,
  },
  showFavoriteButton: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: 'pink',
  }
});

export default styles;
