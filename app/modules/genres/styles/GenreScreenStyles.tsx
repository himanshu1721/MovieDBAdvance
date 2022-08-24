import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
  },
  genresContainer: { flex: 1, padding: moderateScale(5) },
  genreCard: {
    margin: moderateScale(5),
    flex: 1,
    height: verticalScale(80),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.prussianBlue,
  },
  genreTextStyles: {
    color: Colors.white,
    fontSize: moderateScale(20),
    fontWeight: '500',
  },
});

export default styles;
