import React from 'react';
import {Text, View} from 'react-native';
import Strings from '../../../constants/Strings';
import RatingCircle from '../../HomeScreen/components/RatingCircle';
import styles from '../styles/UserScoreStyles';

interface UserScoreType {
  vote_average: number;
}

const UserScore = ({vote_average = 5.6}: UserScoreType): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.userScoreTextStyles}>{Strings.userScore}</Text>
      <View style={styles.itemSeparator} />
      <RatingCircle isMovieDetail={true} vote_average={vote_average} />
    </View>
  );
};

export default UserScore;
