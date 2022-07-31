//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from '../../../themes';

const EmptyWatchList = () => {
  return (
    <View style={{marginTop: 200}}>
      <Text style={{fontSize: 25, fontWeight: '500', color: Colors.limeGreen}}>
        WatchList is Empty!
      </Text>
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
export default EmptyWatchList;
