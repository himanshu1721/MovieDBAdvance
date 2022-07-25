import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {getYear} from '../../../services/TimeUtils';
import styles from '../styles/MovieTitleStyles';

interface MovieTitleProps {
  title: string;
  releaseYear: string;
}

const MovieTitle = ({title, releaseYear}: MovieTitleProps): JSX.Element => {
  const getReleaseDate = useMemo(() => getYear(releaseYear), [releaseYear]);

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.titleTextStyle}>{title}</Text>
        <View style={styles.titleAndYearSeparator} />
        <Text style={styles.titleYearStyle}>({getReleaseDate})</Text>
      </Text>
    </View>
  );
};

export default MovieTitle;
