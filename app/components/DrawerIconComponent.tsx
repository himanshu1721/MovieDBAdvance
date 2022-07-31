import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from '../themes';

interface DrawerIconComponentProps {
  onTap: () => void;
}

const DrawerIconComponent = ({
  onTap,
}: DrawerIconComponentProps): JSX.Element => {
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
  imageStyles: {height: moderateScale(35), width: moderateScale(35)},
});

export default DrawerIconComponent;
