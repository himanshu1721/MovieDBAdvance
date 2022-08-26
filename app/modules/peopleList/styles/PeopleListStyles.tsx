import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  genresContainer: {
    flex: 1,
    padding: moderateScale(5),
    width: '100%',
  },
  personCard: {
    margin: moderateScale(5),
    flex: 1,
    borderRadius: moderateScale(5),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
