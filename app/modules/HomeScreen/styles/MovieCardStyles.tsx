import {StyleSheet} from 'react-native';
import {moderateScale, Colors} from '../../../themes';

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: Colors.gray,
    width: moderateScale(144),
    borderRadius: moderateScale(6),
    height: moderateScale(216),
  },
  container: {
    marginTop: moderateScale(10),
    width: moderateScale(140),
  },
  imageStyles: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(6),
  },
  textContainer: {padding: moderateScale(5)},
  separatorStyles: {height: moderateScale(30)},
  releaseDateStyles: {
    color: Colors.gray,
    fontSize: moderateScale(14),
    fontWeight: '400',
  },
  titleStyles: {
    fontWeight: '500',
    color: Colors.black,
    fontSize: moderateScale(16),
  },
});

export default styles;
