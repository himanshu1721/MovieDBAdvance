//import liraries
import React, {memo, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import RatingCircle from './RatingCircle';
import AppConstants from '../../../constants/AppConstants';
import {refactorDate} from '../../../services';
import {Colors, moderateScale, scale} from '../../../themes';
import MenuCircle from './MenuButtonCircle';
import styles from '../styles/MovieCardStyles';
import {AirbnbRating, Rating} from 'react-native-ratings';
// create a component

const RatingCard = ({rating}) => {
  return (
    <View style={{paddingVertical: 5, alignSelf: 'center'}}>
      <AirbnbRating
        showRating={false}
        isDisabled
        count={5}
        defaultRating={rating ?? 0}
        size={20}
      />
    </View>
  );
};

const MovieCard = ({item, onTap, onLongTap, isRating, rating}): JSX.Element => {
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
      <RatingCircle vote_average={item?.vote_average} />
      {isRating && <RatingCard rating={rating} />}
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
