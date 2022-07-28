import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../../themes';

interface RatingCircleProps {
  vote_average: number;
  isMovieDetail?: boolean;
}

const RatingCircle = ({
  vote_average = 5.6,
  isMovieDetail,
}: RatingCircleProps): JSX.Element => {
  return (
    <View>
      {isMovieDetail ? (
        <Text
          style={{fontSize: 24, fontWeight: '700', color: Colors.limeGreen}}>
          {vote_average.toString().substring(0, 3)}
        </Text>
      ) : null}
    </View>
  );
};

export default RatingCircle;
