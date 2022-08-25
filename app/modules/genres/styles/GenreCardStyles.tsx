import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  genresContainer: { flex: 1, padding: moderateScale(5) },
  genreCard: {
    margin: moderateScale(5),
    flex: 1,
    aspectRatio: 16 / 9,
    height: verticalScale(80),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreTextStyles: {
    color: Colors.white,
    fontSize: moderateScale(20),
    letterSpacing: 0.4,
    fontWeight: '500',
  },
  imageBackgroundStyles: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: { opacity: 0.5 },
});

export default styles;
