import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import styles from '../styles/TapAndHoldModalBackdropStyles';

interface TapAndHoldModalBackdropProps {
  onTap: () => void;
}

const TapAndHoldModalBackdrop = ({ onTap }: TapAndHoldModalBackdropProps) => {
  return (
    <Pressable onPress={onTap} style={styles.container}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="dark"
        blurAmount={12}
      />
    </Pressable>
  );
};

export default TapAndHoldModalBackdrop;
