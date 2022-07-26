import React from 'react';
import {View} from 'react-native';

interface RatingCircleProps {
  vote_average: number;
  isMovieDetail?: boolean;
}

const RatingCircle = ({
  vote_average = 5.6,
  isMovieDetail,
}: RatingCircleProps): JSX.Element => {
  return <View></View>;
};

export default RatingCircle;

{
  /* <View
style={
  isMovieDetail ? styles.containerMovieDetailScreen : styles.container
}>
<CircularProgress
  duration={0}
  value={vote_average * 10}
  activeStrokeColor={returnColor(vote_average).colour}
  inActiveStrokeColor={returnColor(vote_average).shadow}
  inActiveStrokeOpacity={1}
  inActiveStrokeWidth={scale(3)}
  activeStrokeWidth={scale(3)}
  textColor={Colors.white}
  circleBackgroundColor={Colors.black}
  valueSuffix={'%'}
  radius={moderateScale(24)}
/>
</View> */
}
