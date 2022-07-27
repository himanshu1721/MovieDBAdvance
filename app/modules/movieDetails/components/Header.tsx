import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Images from '../../../assets/images';
import {logOutUser} from '../../../features/auth/authSlice';
import styles from '../styles/HeaderStyles';

interface CustomHeaderProps {
  onTap: () => void;
}

const CustomHeader = ({
  onTap,
  backButton,
  renderIcon,
}: CustomHeaderProps): JSX.Element => {
  const dispatch = useDispatch();

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
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {renderIcon}
          </View>
        )}
        <View style={styles.titleContainer}>
          <Image style={styles.imageStyles} source={Images.appLogo} />
        </View>
        <TouchableOpacity
          onPress={() => dispatch(logOutUser())}
          style={styles.separateContainer}></TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
