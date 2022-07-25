import React from 'react';
import {View, Image} from 'react-native';
import AppConstants from '../../../constants/AppConstants';
import styles from '../styles/ImageComponentStyles';

interface ImageComponentProps {
  poster: string;
  backdrop: string;
}

const ImageComponent = ({poster, backdrop}: ImageComponentProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backdropImageStyles}
        source={{
          uri: `${AppConstants.API_IMAGE}${backdrop}`,
        }}
      />
      <Image
        style={styles.posterImageStyles}
        source={{
          uri: `${AppConstants.API_IMAGE}${poster}`,
        }}
      />
    </View>
  );
};

export default ImageComponent;
