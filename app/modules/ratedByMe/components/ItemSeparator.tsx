//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { verticalScale } from '../../../themes';

const ItemSeparatorMyRatings = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        height: verticalScale(50),
      }}>
      <View
        style={{
          alignSelf: 'center',
          width: '40%',
          height: verticalScale(2.6),
          opacity: 0.5,
          borderRadius: 5 / 2,
          backgroundColor: '#696969',
        }}></View>
    </View>
  );
};


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ItemSeparatorMyRatings;
