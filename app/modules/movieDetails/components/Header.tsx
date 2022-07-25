import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Images from '../../../assets/images';
import styles from '../styles/HeaderStyles';

interface CustomHeaderProps {
  onTap: () => void;
}

const CustomHeader = ({
  onTap,
  backButton = true,
}: CustomHeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {backButton ? (
          <TouchableOpacity
            onPress={onTap}
            activeOpacity={0.9}
            style={styles.backIconContainer}>
            <Image source={Images.back} style={styles.backIconStyles} />
          </TouchableOpacity>
        ) : (
          <View style={{flex: 1}}></View>
        )}
        <View style={styles.titleContainer}>
          <Image style={styles.imageStyles} source={Images.appLogo} />
        </View>
        <View style={styles.separateContainer} />
      </View>
    </View>
  );
};

export default CustomHeader;
