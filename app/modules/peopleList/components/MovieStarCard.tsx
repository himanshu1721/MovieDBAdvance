import React from 'react';
import { Image, Text, View } from 'react-native';
import AppConstants from '../../../constants/AppConstants';
import styles from '../styles/MovieStarCardStyles';
import { MovieStarCardProps } from '../types/MovieStarsTypes';

const MovieStarCard = ({ item }: MovieStarCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyles}
        source={{
          uri: `${AppConstants.API_IMAGE}${item?.profile_path}`,
        }}
      />
      <View style={styles.nameWrapper}>
        <Text style={styles.nameTextStyles}>{item?.name}</Text>
      </View>
    </View>
  );
};

export default MovieStarCard;
