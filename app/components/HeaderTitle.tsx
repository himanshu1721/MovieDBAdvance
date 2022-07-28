//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../themes';

// create a component
const HeaderTitle = ({title}) => {
  return <Text style={styles.titleTextStyles}>{title}</Text>;
};

const styles = StyleSheet.create({
  titleTextStyles: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.limeGreen,
  },
});

//make this component available to the app
export default HeaderTitle;
