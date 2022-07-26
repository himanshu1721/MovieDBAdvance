import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from '../styles/MenuButtonCircleStyles';

const MenuCircle = (): JSX.Element => {
  return (
    <TouchableOpacity activeOpacity={0.82} style={styles.container}>
      <View style={styles.roundMenuItemFooterAndHeader} />
      <View style={styles.dotContainer}>
        <View style={styles.roundMenuDot} />
        <View style={styles.roundMenuDot} />
        <View style={styles.roundMenuDot} />
      </View>
      <View style={styles.roundMenuItemFooterAndHeader} />
    </TouchableOpacity>
  );
};

export default MenuCircle;
