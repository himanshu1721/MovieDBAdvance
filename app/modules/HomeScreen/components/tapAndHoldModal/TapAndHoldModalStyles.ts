import {StyleSheet} from 'react-native';
import {Colors} from '../../../../themes';

const styles = StyleSheet.create({
  modalStyles: {
    shadowColor: '#474747',
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
  },
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    // height: 400,
  },
  imageStyles: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    height: 200,
  },
  heightTen: {height: 10},
  titleAndOverviewContainer: {paddingHorizontal: 10},
  titleStyles: {fontSize: 20, fontWeight: '600'},
  overviewStyles: {letterSpacing: 0.3, fontSize: 16, fontWeight: '400'},
  releaseYearStyles: {color: '#474747', fontSize: 17, fontWeight: '500'},
});


export default styles;
