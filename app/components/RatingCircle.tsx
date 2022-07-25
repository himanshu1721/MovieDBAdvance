import React from 'react';
import {View, Text} from 'react-native';
import {returnColor} from '../services';
import {moderateScale, Colors, scale} from '../themes';
import Strings from '../constants/Strings';
import {styles} from './styles/RatingCircleStyles';
import ProgressCircle from 'react-native-progress-circle';
import CircularProgress from 'react-native-circular-progress-indicator';

interface RatingCircleProps {
  vote_average: number;
  isMovieDetail?: boolean;
}

const RatingCircle = ({
  vote_average = 5.6,
  isMovieDetail,
}: RatingCircleProps): JSX.Element => {
  return (
    <View
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
    </View>
  );
};

export default RatingCircle;
