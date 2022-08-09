import React from 'react';
import { Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle-rtl';
import { Strings } from '../../../constants';
import { returnColor } from '../../../services';
import { moderateScale, Colors } from '../../../themes';
import colors from '../../../themes/Colors';
import styles from '../styles/RatingCircleStyles';

interface RatingCircleProps {
  vote_average: number;
  isMovieDetail?: boolean;
}

const RatingCircle = ({
  vote_average = 5.6,
  isMovieDetail,
}: RatingCircleProps): JSX.Element => {
  const getValidNumber = () => {
    const x = Math.round(vote_average * 10) / 10;
    return x * 10;
  };

  return (
    <View style={styles.containerMovieDetailScreen}>
      <Text
        style={{
          color: colors.limeGreen,
          fontSize: moderateScale(20),
          fontWeight: '600',
        }}>
        {getValidNumber()}%
      </Text>
    </View>
  );
};

export default RatingCircle;
