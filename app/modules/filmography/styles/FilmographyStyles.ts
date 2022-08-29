import { StyleSheet } from 'react-native';
import { Colors, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: Colors.darkBlue },
  safeAreaContainer: { flex: 1 },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  itemSeparator: { height: verticalScale(15) },
  footerStyles: {
    height: verticalScale(70),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  loadingStyles: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
