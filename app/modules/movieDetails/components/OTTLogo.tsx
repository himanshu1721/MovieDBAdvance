import React from 'react';
import { Image, View } from 'react-native';
import Icons from '../../../assets/images';
import styles from '../styles/OTTLogoStyles';

import { OTTLogoTypes } from '../types/OTTLogoTypes';
const OTTLogo = ({ uri }: OTTLogoTypes) => {
  return (
    <View style={styles.OTTLogoContainer}>
      <Image
        defaultSource={Icons.shrug}
        style={styles.OTTLogoStyles}
        resizeMode="contain"
        source={{ uri: uri }}
      />
    </View>
  );
};

export default OTTLogo;
