import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import AppConstants from '../constants/AppConstants';
import { moderateScale } from '../themes';
import styles from './styles/MovieBriefStyles';

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

interface MovieBriefProps {
  item: ItemProps;
  onTap: () => void;
}

const MovieBrief = ({item, onTap}: MovieBriefProps): JSX.Element => {
  return (
    <Pressable onPress={onTap} style={styles.container}>
      <Image
        style={styles.imageStyles}
        source={{
          uri: `${AppConstants.API_IMAGE}${item?.backdrop_path}`,
        }}
      />
      <View style={styles.heightFive} />
      <View style={{padding: moderateScale(10)}}>
        <Text style={styles.titleAndYearWrapper}>
          <Text style={styles.titleStyles}>
            {item?.original_title ?? item?.original_name}
          </Text>
          <Text style={styles.movieYear}>
            (
            {item?.release_date?.substring(0, 4) ??
              item?.first_air_date?.substring(0, 4)}
            )
          </Text>
        </Text>
        <View style={styles.heightTen} />
        <Text>
          <Text style={styles.overviewStyles}>
            {item?.overview.substring(0, 180)}
          </Text>
          <Text style={styles.threeDotsStyles}>...</Text>
        </Text>
        <View style={styles.heightTen} />
      </View>
    </Pressable>
  );
};

export default MovieBrief;
