import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: { paddingHorizontal: scale(10) },
  sectionTitleContainer: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(2),
    marginVertical: verticalScale(5),
    marginTop: verticalScale(10),
  },
  loadingContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  bottomFiller: { height: verticalScale(200) },
});

export default styles;
