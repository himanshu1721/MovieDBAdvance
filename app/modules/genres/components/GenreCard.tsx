import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Pressable, Text } from 'react-native';
import { Strings } from '../../../constants';
import styles from '../styles/GenreCardStyles';
import { GenreCardProps } from '../types/GenreCardTypes';

const GenreCard = ({ item }: GenreCardProps) => {
  const navigation = useNavigation();
  const [movieGenrePath, setMovieGenrePath] = useState<string>();

  const getMovieBG = async () => {
    const path = await firestore()
      .collection('GenreBackground')
      .doc(`${item.id}`)
      .get();
    setMovieGenrePath(path?.data()?.path);
  };

  useEffect(() => {
    getMovieBG();
  }, []);

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(Strings.genreMovies, {
          genreId: item.id,
          genreName: item.name,
        })
      }
      style={styles.genreCard}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.imageStyles}
        style={styles.imageBackgroundStyles}
        source={{ uri: movieGenrePath }}>
        <Text style={styles.genreTextStyles}>{item.name}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default GenreCard;
