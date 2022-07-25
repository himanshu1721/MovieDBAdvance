//import liraries
import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import RatingCircle from '../../../components/RatingCircle';
import AppConstants from '../../../constants/AppConstants';
import {refactorDate} from '../../../services';
import {Colors, moderateScale, scale} from '../../../themes';
import MenuCircle from '../MenuButtonCircle';
import styles from './MovieCardStyles';
// create a component
const MovieCard = ({item, onTap}): JSX.Element => {
  return (
    <TouchableOpacity
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
      <RatingCircle vote_average={item?.vote_average} />
      <View style={styles.separatorStyles} />
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

//make this component available to the app
export default memo(MovieCard);
