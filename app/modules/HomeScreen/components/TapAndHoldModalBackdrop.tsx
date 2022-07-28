//import liraries
import { BlurView } from '@react-native-community/blur';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import styles from '../styles/TapAndHoldModalBackdropStyles';

const TapAndHoldModalBackdrop = ({onTap}) => {
  return (
    <Pressable onPress={onTap} style={styles.container}>
      {/* <View style={styles.subContainer} /> */}
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="dark"
        blurAmount={12}></BlurView>
    </Pressable>
  );
};
export default TapAndHoldModalBackdrop;
