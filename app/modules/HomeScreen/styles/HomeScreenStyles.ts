import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {paddingHorizontal: 10},
  sectionTitleContainer: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    marginVertical: 5,
    marginTop: 10,
  },
  loadingContainer: {justifyContent: 'center', flex: 1, height: 400},
  bottomFiller: {height: 200},
});
export default styles;
