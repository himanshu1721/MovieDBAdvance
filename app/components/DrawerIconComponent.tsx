import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const DrawerIconComponent = ({onTap}) => {
  return (
    <TouchableOpacity onPress={onTap}>
      <Image
        style={styles.imageStyles}
        source={require('../assets/images/drawer.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageStyles: {height: 35, width: 35},
});

export default DrawerIconComponent;
