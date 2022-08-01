import React, {useMemo} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {AirbnbRating} from 'react-native-ratings';
import GenreCard from '../../../components/GenreCard';
import AppConstants from '../../../constants/AppConstants';
import {convertMinsToHrsMins} from '../../../services/TimeUtils';
import {moderateScale} from '../../../themes';
import styles from '../styles/MyRatingMoviesCardStyles';

interface ItemProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MyRatingMovieCardProps {
  data: ItemProps;
  onTap: () => void;
  rating?: number;
}

const MyRatingMovieCard = ({data, onTap, rating}: MyRatingMovieCardProps) => {
  const getRuntime = runTime => convertMinsToHrsMins(runTime);

  return (
    <Pressable onPress={onTap} style={styles.container}>
      <Image
        style={styles.imageStyles}
        source={{
          uri: `${AppConstants.API_IMAGE}${data?.backdrop_path}`,
        }}
      />
      <View style={styles.itemSeparator} />
      <View style={{padding: moderateScale(10)}}>
        <Text>
          <Text style={styles.titleStyles}>
            {data?.original_title ?? data?.original_name}
          </Text>
          <Text style={styles.releaseYearStyles}>
            (
            {data?.release_date?.substring(0, 4) ??
              data?.first_air_date?.substring(0, 4)}
            )
          </Text>
        </Text>
        <View style={styles.itemSeparator} />
        {rating ? (
          <View style={styles.ratingWrapper}>
            <View style={styles.ratingContainer}>
              <AirbnbRating
                starImage={require('../../../assets/images/star.png')}
                isDisabled={true}
                showRating={false}
                defaultRating={rating}
                size={28}
              />
            </View>
            <View style={styles.extraViewNearRating} />
          </View>
        ) : null}
        <View style={styles.itemSeparator} />
        <View style={styles.genreListContainer}>
          <FlatList
            numColumns={4}
            data={data?.genres}
            renderItem={({item}) => {
              return <GenreCard genreName={item?.name} />;
            }}
          />
        </View>
        <View style={styles.itemSeparator} />
        <View>
          <Text style={styles.runtimeStyles}>
            Runtime - {getRuntime(data?.runtime)}
          </Text>
        </View>
        <View style={styles.itemSeparator} />
      </View>
    </Pressable>
  );
};

export default MyRatingMovieCard;
