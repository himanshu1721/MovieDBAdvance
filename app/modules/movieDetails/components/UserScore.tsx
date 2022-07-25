import React from 'react';
import {View, Text} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import RatingCircle from '../../../components/RatingCircle';
// import RatingCircle from '../../../components/RatingCircle';
import Strings from '../../../constants/Strings';
import {Colors, moderateScale, scale} from '../../../themes';
import styles from '../styles/UserScoreStyles';

interface UserScoreType {
  vote_average: number;
}

const UserScore = ({vote_average = 5.6}: UserScoreType): JSX.Element => {
  return (
    <View style={styles.container}>
      <RatingCircle isMovieDetail={true} vote_average={vote_average} />
      <View style={styles.itemSeparator} />
      <Text style={styles.userScoreTextStyles}>{Strings.userScore}</Text>
    </View>
  );
};

export default UserScore;
