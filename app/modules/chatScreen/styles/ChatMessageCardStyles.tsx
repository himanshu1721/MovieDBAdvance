import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  cardStylesSenderMe: { borderTopLeftRadius: 0, alignSelf: 'flex-start' },
  cardStylesSenderNotMe: { borderBottomRightRadius: 0, alignSelf: 'flex-end' },
  cardStyles: {
    padding: moderateScale(10),
    paddingVertical: verticalScale(7),
    borderRadius: moderateScale(10),
    width: '70%',
    marginBottom: verticalScale(10),
  },
  textStyles: {
    fontSize: moderateScale(16),
    color: Colors.white,
  },
  messageTimeTextStyles: {
    alignSelf: 'flex-end',
    fontSize: moderateScale(13),
    fontWeight: '300',
    color: Colors.white,
  },
});

export default styles;
