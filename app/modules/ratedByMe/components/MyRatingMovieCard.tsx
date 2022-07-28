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
import {FlatList} from 'react-native-gesture-handler';
import {AirbnbRating} from 'react-native-ratings';
import AppConstants from '../../../constants/AppConstants';

// create a component
const MyRatingMovieCard = ({data, onTap, rating}) => {
  return (
    <Pressable
      onPress={onTap}
      style={{
        padding: 10,
        borderRadius: 10,
        // backgroundColor: '#0b253f',
        width: 370,
      }}>
      <Image
        style={{
          // borderTopRightRadius: 10,
          // borderTopLeftRadius: 10,
          width: '100%',
          height: 200,
        }}
        source={{
          uri: `${AppConstants.API_IMAGE}${data?.backdrop_path}`,
        }}
      />
      <View style={{height: 10}}></View>
      <View style={{}}>
        <Text style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
            {data?.original_title ?? data?.original_name}
          </Text>
          <Text
            style={{
              color: '#ccc',
              fontSize: 17,
              fontWeight: '500',
            }}>
            (
            {data?.release_date?.substring(0, 4) ??
              data?.first_air_date?.substring(0, 4)}
            )
          </Text>
        </Text>
        <TouchableOpacity
          // onPress={handleModal}
          style={{height: 10}}></TouchableOpacity>

        {rating ? (
          <View style={{flexDirection: 'row'}}>
            {/* <View style={{backgroundColor: 'green', flex: 1}}></View> */}
            <View style={{flex: 1, paddingHorizontal: 0}}>
              <AirbnbRating
                starImage={require('../../../assets/images/star.png')}
                isDisabled={true}
                showRating={false}
                defaultRating={rating}
                size={28}
              />
            </View>

            <View style={{flex: 1.1}}></View>
          </View>
        ) : null}
        <TouchableOpacity
          // onPress={handleModal}
          style={{height: 5}}></TouchableOpacity>

        <View style={{flexDirection: 'row', maxHeight: 300, width: '100%'}}>
          <FlatList
            numColumns={4}
            style={{flex: 1}}
            data={data?.genres}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginBottom: 5,
                    paddingVertical: 3,
                    marginRight: 5,
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    backgroundColor: '#fb4c93',
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      letterSpacing: 0.2,
                      color: 'white',
                      fontSize: 15,
                    }}>
                    {item?.name}
                  </Text>
                </View>
              );
            }}
          />
        </View>

        <TouchableOpacity
          // onPress={handleModal}
          style={{height: 2}}></TouchableOpacity>

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
export default MyRatingMovieCard;
