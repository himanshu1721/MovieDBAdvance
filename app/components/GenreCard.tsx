import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/GenreCardStyles';

interface GenreCardProps {
  genreName: string;
}

const GenreCard = ({genreName}: GenreCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>{genreName}</Text>
    </View>
  );
};

export default GenreCard;
