import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import GenreCard from '../../../components/GenreCard';
import AppConstants from '../../../constants/AppConstants';
import { convertMinsToHrsMins } from '../../../services/TimeUtils';
import styles from '../styles/FavoriteMovieCard';
import MovieProps from '../../../types/Movie';

interface FavoriteMovieCardProps {
  item: MovieProps;
}

const renderItem = ({ item }) => {
  return <GenreCard genreName={item?.name} />;
};

const FavoriteMovieCard = ({ item }: FavoriteMovieCardProps) => {
  const getRuntime = (runTime: number) => convertMinsToHrsMins(runTime);

  return (
    <View style={styles.favoriteMovieCard}>
      <Image
        style={styles.moviePosterStyles}
        source={{
          uri: AppConstants.API_IMAGE + item?.poster_path,
        }}
      />
      <View style={styles.imageAndTextSeparator} />
      <View style={styles.favoriteDetailsWrapper}>
        <Text>
          <Text style={styles.favoriteMovieTitle}>{item?.title}</Text>
          <Text style={styles.favoriteMovieReleaseYear}>
            ({item?.release_date?.substring(0, 4)})
          </Text>
        </Text>
        <View style={styles.titleAndGenreSeparator} />
        <View>
          <FlatList
            style={styles.genreFlatList}
            numColumns={4}
            data={item?.genres}
            renderItem={renderItem}
          />
        </View>
        <View>
          <Text style={styles.runtime}>
            Runtime - {getRuntime(item?.runtime)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FavoriteMovieCard;
