import {DrawerItemList} from '@react-navigation/drawer';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import {DrawerNavigationState, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, Alert, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {Icons, Images} from '../assets';
import {Strings} from '../constants';
import {logOutUser} from '../features/auth/authSlice';
// import {dummyEmail, dummyUsername} from '../constants/DummyData';
// import AuthActions, {userSelectors} from '../redux/AuthRedux';
import styles from './styles/CustomDrawerStyle';

type PropsType = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

const CustomDrawer = (props: PropsType) => {
  const userData = useSelector(state => state?.auth?.email);
  const dispatch = useDispatch();

  const logOutPressed = () =>
    Alert.alert('Warning', 'Are you sure you want to log out?', [
      {
        text: 'No',
      },
      {
        text: 'Yes',
        onPress: () => dispatch(logOutUser()),
      },
    ]);

  return (
    <View style={styles.screen}>
      <Image
        source={require('../assets/images/tmdbLogo.png')}
        style={styles.appLogo}
        resizeMode={'contain'}
      />
      <View style={styles.profileDetail}>
        <Text style={styles.usernameText}>Hello</Text>
        <Text style={styles.emailText}>{userData ? userData : ''}</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.divider} />
      {userData ? (
        <TouchableOpacity onPress={logOutPressed} style={styles.touchableView}>
          <Image
            source={require('../assets/images/logoutLight.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.touchableText}>{Strings.logout}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.touchableView}>
          <Image
            source={require('../assets/images/logoutLight.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.touchableText}>{Strings.login}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomDrawer;
