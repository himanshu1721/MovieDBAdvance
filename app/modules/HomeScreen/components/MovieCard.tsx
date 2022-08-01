import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AppConstants from '../../../constants/AppConstants';
import {refactorDate} from '../../../services';
import {verticalScale} from '../../../themes';
import styles from '../styles/MovieCardStyles';
import MenuCircle from './MenuButtonCircle';
import RatingCircle from './RatingCircle';

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
  original_name?: string;
  first_air_date?: string;
}
interface MovieCardProps {
  item: ItemProps;
  onTap: () => void;
  onLongTap: () => {};
}

const MovieCard = ({item, onTap, onLongTap}: MovieCardProps): JSX.Element => {
  return (
    <TouchableOpacity
      delayLongPress={200}
      onLongPress={onLongTap}
      onPress={onTap}
      activeOpacity={0.9}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyles}
          source={{
            uri: AppConstants.API_IMAGE + item?.poster_path,
          }}
        />
      </View>
      <MenuCircle />
      <View style={{height: verticalScale(5)}} />
      <View style={styles.textContainer}>
        <Text style={styles.titleStyles}>
          {item?.title ?? item?.original_name}
        </Text>
        <Text style={styles.releaseDateStyles}>
          {refactorDate(item?.release_date ?? item?.first_air_date)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(MovieCard);
