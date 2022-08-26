import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Strings } from '../../../constants';
import AppConstants from '../../../constants/AppConstants';
import styles from '../styles/MovieStarCardStyles';
import { MovieStarCardProps } from '../types/MovieStarsTypes';

const MovieStarCard = ({ item }: MovieStarCardProps) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(Strings.celebrityDetailScreen, { id: item?.id })
      }
      style={styles.container}>
      <Image
        style={styles.imageStyles}
        source={{
          uri: `${AppConstants.API_IMAGE}${item.profile_path}`,
        }}
      />
      <View style={styles.nameWrapper}>
        <Text style={styles.nameTextStyles}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

export default MovieStarCard;
