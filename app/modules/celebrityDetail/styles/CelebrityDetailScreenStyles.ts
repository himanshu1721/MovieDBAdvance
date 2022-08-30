import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    backgroundColor: Colors.black,
    flex: 1,
    width: '100%',
  },
  safeAreaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personalDetailContainer: {
    marginTop: verticalScale(3),
    flexDirection: 'row',
  },
  nameAndDetailsSeparator: { height: verticalScale(5) },
  detailTextStyles: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: Colors.white,
  },
  iconStyles: { width: moderateScale(20), height: moderateScale(20) },
  iconAndTextSeparator: { width: '2%' },
  posterStyles: {
    height: verticalScale(190),
    borderRadius: moderateScale(5),
    aspectRatio: 0.667,
  },
  imageListWrapper: {
    height: verticalScale(190),
    borderRadius: moderateScale(5),
  },
  imageSeparator: { width: scale(10) },
  nameStyles: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: Colors.white,
  },
  aboutHeadingTextStyles: {
    fontSize: moderateScale(22),
    letterSpacing: 0.5,
    fontWeight: '300',
    color: Colors.white,
    marginBottom: verticalScale(10),
  },
  aboutTextStyles: {
    fontSize: moderateScale(14),
    fontWeight: '300',
    color: Colors.white,
  },
  subContainer: { marginVertical: verticalScale(10) },
  activityIndicatorWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filmographyContainer: {
    marginVertical: verticalScale(15),
    height: verticalScale(35),
    justifyContent: 'center',
  },
  filmographyTextStyles: {
    fontSize: moderateScale(16),
    color: Colors.blue,
  },
});

export default styles;
