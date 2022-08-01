import { StyleSheet, Dimensions } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../themes';

export const styles = StyleSheet.create({
  profileCardSkeletonContainer: {
    opacity: 0.92,
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(240),
    width: scale(162),
    marginHorizontal: scale(3),
    backgroundColor: Colors.discoverSkeletonCard,
    borderRadius: 10,
    marginBottom: verticalScale(2),
  },
  dateAndShareContainer: {
    marginBottom: verticalScale(9),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  skeletonCardRow: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
  },
  profileCardSkeletonSubContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profilePictureSkeleton: {
    marginHorizontal: scale(4),
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: 16,
  },
  shareIconSkeleton: {
    marginHorizontal: scale(4),
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: 11,
  },
  usernameSkeleton: {
    opacity: 0.8,
    height: verticalScale(20),
    marginLeft: scale(5),
    width: scale(115),
    borderRadius: 10,
  },
  showSubHeaderStyles: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  separator: { height: verticalScale(120) },
  profilePictureAndUsernameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messageSkeleton: {
    opacity: 0.8,
    height: moderateScale(216),
    width: moderateScale(144),
    borderRadius: 10,
  },
  searchSkeletonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchSkeleton: {
    borderRadius: 5,
    height: verticalScale(44),
    width: '100%',
    opacity: 0.8,
  },
  searchSkeletonIconContainer: {
    position: 'absolute',
    right: scale(8),
  },
  cardSkeletonGrid: { opacity: 0.85 },
  loader: { backgroundColor: Colors.white },
  loaderSize: {
    opacity: 0.55,
    borderRadius: 10,
    width: scale(162),
    height: verticalScale(250),
  },
  background: {
    flexGrow: 1,
    overflow: 'hidden',
  },
});
