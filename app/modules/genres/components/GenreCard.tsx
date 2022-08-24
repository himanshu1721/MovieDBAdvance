import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../../themes';
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
        navigation.navigate('GenreMovies', {
          genreId: item.id,
          genreName: item.name,
        })
      }
      style={styles.genreCard}>
      <ImageBackground
        resizeMode="cover"
        borderRadius={moderateScale(5)}
        imageStyle={styles.imageStyles}
        style={styles.imageBackgroundStyles}
        source={{ uri: movieGenrePath }}>
        <Text style={styles.genreTextStyles}>{item.name}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  genresContainer: { flex: 1, padding: moderateScale(5) },
  genreCard: {
    margin: moderateScale(5),
    flex: 1,
    aspectRatio: 16 / 9,
    height: verticalScale(80),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreTextStyles: {
    color: Colors.white,
    fontSize: moderateScale(20),
    letterSpacing: 0.4,
    fontWeight: '500',
  },
  imageBackgroundStyles: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: { opacity: 0.5 },
});

export default GenreCard;
