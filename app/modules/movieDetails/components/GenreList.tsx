import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {getGenreList} from '../../../services/HelperFunctions';
import styles from '../styles/GenreListStyles';

interface GenreProp {
  id: number;
  name: string;
}

interface GenreListProps {
  genres: GenreProp[];
}

const GenreList = ({genres}: GenreListProps): JSX.Element => {
  const genreList = useMemo(() => getGenreList(genres), [genres]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.genreTextStyles}>{genreList}</Text>
      </View>
    </View>
  );
};

export default GenreList;
