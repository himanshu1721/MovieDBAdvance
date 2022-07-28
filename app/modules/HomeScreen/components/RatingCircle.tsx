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

