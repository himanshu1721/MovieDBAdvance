import React from 'react';
import {View, Text} from 'react-native';
import Strings from '../../../constants/Strings';
import styles from '../styles/OverviewStyles';

interface OverviewType {
  description: string;
}

const Overview = ({description}: OverviewType): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>{Strings.overview}</Text>
      <View style={styles.itemSeparator} />
      <Text style={styles.descriptionStyle}>{description}</Text>
    </View>
  );
};

export default Overview;
