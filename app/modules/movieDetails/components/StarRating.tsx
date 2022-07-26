//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {restockCake} from '../../../redux/actions';

// create a component

const Star = () => {
  return (
    <TouchableOpacity>
      <View style={{width: 15, height: 15, backgroundColor: 'grey'}} />
    </TouchableOpacity>
  );
};

const StarRating = () => {
  const [rating, setRating] = useState([0, 0, 0, 0, 0]);
  const [rate, setRate] = useState(-1);

  return (
    <View style={{width: 200}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {rating.map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                const result = [0, 0, 0, 0, 0];
                result[index] = 1;
                setRate(index + 1);
                setRating(result);
                console.log('==>>', rating)
              }}>
              {/* onPress={() => setRating([...rating, rating[index] === 1])}> */}
              {}
            </TouchableOpacity>
          );
        })}
      </View>
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
export default StarRating;
