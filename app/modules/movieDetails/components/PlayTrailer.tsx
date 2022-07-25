import React from 'react';
import {View, Text, Image} from 'react-native';
import Images from '../../../assets/images';
import Strings from '../../../constants/Strings';
import styles from '../styles/PlayTrailerStyles';

const PlayTrailer = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image style={styles.iconStyles} source={Images.play} />
      <Text style={styles.playTrailerTextStyles}>{Strings.playTrailer}</Text>
    </View>
  );
};

export default PlayTrailer;
