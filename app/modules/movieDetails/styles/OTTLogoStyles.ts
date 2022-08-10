import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  OTTLogoStyles: { width: '80%', height: '100%' },
  OTTLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: moderateScale(10),
    alignSelf: 'center',
    flexDirection: 'row',
    height: verticalScale(40),
    borderRadius: 5,
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
});

export default styles;
