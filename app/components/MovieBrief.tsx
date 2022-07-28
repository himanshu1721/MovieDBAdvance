//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppConstants from '../constants/AppConstants';

// create a component
const MovieBrief = ({item, onTap}) => {
  return (
    <Pressable
      onPress={onTap}
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: 340,
      }}>
      <Image
        style={{
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          width: '100%',
          height: 200,
        }}
        source={{
          uri: `${AppConstants.API_IMAGE}${item?.backdrop_path}`,
        }}
      />
      <View style={{height: 5}}></View>
      <View style={{}}>
        <Text style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            {item?.original_title ?? item?.original_name}
          </Text>
          <Text
            style={{
              color: '#474747',
              fontSize: 17,
              fontWeight: '500',
            }}>
            (
            {item?.release_date?.substring(0, 4) ??
              item?.first_air_date?.substring(0, 4)}
            )
          </Text>
        </Text>
        <TouchableOpacity
          // onPress={handleModal}
          style={{height: 10}}></TouchableOpacity>
        <Text>
          <Text
            style={{
              letterSpacing: 0.3,
              fontSize: 16,
              fontWeight: '400',
            }}>
            {item?.overview.substring(0, 180)}
          </Text>
          <Text style={{letterSpacing: 0.3, fontSize: 16, fontWeight: '400'}}>
            ...
          </Text>
        </Text>

        <View style={{height: 10}}></View>
      </View>
    </Pressable>
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
export default MovieBrief;
