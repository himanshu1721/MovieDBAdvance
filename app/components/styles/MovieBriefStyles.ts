import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../themes';

const styles = StyleSheet.create({
  container: {
    // padding: moderateScale(10),
    // borderRadius: 10,
    // backgroundColor: '#0b253f',
    backgroundColor: '#222',
    width: scale(300),
  },
  imageStyles: {
    aspectRatio: 16 / 9,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    width: '100%',
    // height: verticalScale(200),
  },
  titleStyles: {fontSize: moderateScale(20), color: 'white', fontWeight: '400'},
  movieYear: {
    color: '#ccc',
    fontSize: moderateScale(16),
    fontWeight: '300',
    // color: 'white',
  },
  overviewStyles: {
    letterSpacing: 0.3,
    fontSize: moderateScale(14),
    fontWeight: '300',
    color: 'white',
  },
  threeDotsStyles: {
    color: 'white',
    letterSpacing: 0.3,
    fontSize: 16,
    fontWeight: '400',
  },
  titleAndYearWrapper: {alignItems: 'center'},
  heightFive: {height: 5},
  heightTen: {height: 10},
});

export default styles;
