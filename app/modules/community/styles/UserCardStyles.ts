import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  profilePictureContainer: {
    width: moderateScale(70),
    height: moderateScale(70),
    marginTop: '2%',
    marginLeft: '3%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(35),
  },
  nameAndUsernameWrapper: { paddingHorizontal: 10, paddingVertical: 5 },
  aboutTextStyles: { fontSize: moderateScale(16), color: 'white' },
  aboutContainer: {
    width: '100%',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  itemSeparator: { height: verticalScale(10) },
  dpAndDetailContainer: { flexDirection: 'row', alignItems: 'center' },
  usernameStyles: {
    fontSize: moderateScale(15),
    fontStyle: 'italic',
    color: 'white',
  },
  nameStyles: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    color: 'white',
  },
  onlineGreenCircle: {
    position: 'absolute',
    right: '10%',
    bottom: 0,
    height: moderateScale(10),
    width: moderateScale(10),
    borderRadius: moderateScale(5),
    backgroundColor: 'green',
  },
});

export default styles;
