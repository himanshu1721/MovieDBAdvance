import React from 'react';
import { Text, View } from 'react-native';
import { Strings } from '../../../constants';
import styles from '../styles/AdultContentWarning';

const AdultContentWarning = () => {
  return (
    <View style={styles.container}>
      <View style={styles.extraView} />
      <Text style={styles.headingTextStyles}>{Strings.sorry}</Text>
      <View style={styles.headingAndDescriptionSeparator} />
      <Text style={styles.description}>{Strings.adultContentWarning}</Text>
    </View>
  );
};

export default AdultContentWarning;
