//import liraries
import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {useSelector} from 'react-redux';
import {Colors} from '../../../themes';

// create a component
const RateAMovieModal = ({
  modalVisible,
  ratingCompleted,
  setModalVisible,
  myRated,
  rateMovie,
}) => {
  const isThisMovieRatedByMeBefore = useSelector(
    state => state?.detail?.haveBeenRatedBeforeByMe,
  );

  return (
    <Modal
      animationIn={'fadeIn'}
      style={{
        alignSelf: 'center',
        shadowColor: '#474747',
        shadowRadius: 5,
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 1,
      }}
      backdropColor="rgba(200, 200, 200, 0.7)"
      // backdropColor="rgba(0,0,0,0.8)"
      backdropOpacity={0.7}
      onBackdropPress={() => setModalVisible(!modalVisible)}
      isVisible={modalVisible}>
      <View
        style={{
          borderRadius: 10,
          // height: 200,
          paddingVertical: 40,
          paddingHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <Pressable
          hitSlop={5}
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            position: 'absolute',
            right: 12,
            top: 12,
          }}>
          <Image
            source={require('../../../assets/images/close.png')}
            style={{width: 20, height: 20}}
          />
        </Pressable>
        <AirbnbRating
          isDisabled={isThisMovieRatedByMeBefore}
          showRating={false}
          onFinishRating={ratingCompleted}
          count={5}
          defaultRating={myRated}
          size={30}
          reviewSize={0}
        />
        <View style={{height: 20}}></View>
        <TouchableOpacity
          disabled={isThisMovieRatedByMeBefore}
          onPress={() => {
            setModalVisible(!modalVisible);
            rateMovie();
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: !isThisMovieRatedByMeBefore ? 1 : 0.4,
            backgroundColor: Colors.natureGreen,
            paddingHorizontal: 20,
            width: null,
            borderRadius: 5,
            paddingVertical: 2,
          }}>
          <Text style={{fontWeight: '600', fontSize: 20}}>RATE</Text>
        </TouchableOpacity>
        <View style={{height: 10}}></View>
        {isThisMovieRatedByMeBefore ? (
          <View>
            <Text style={{color: 'gold'}}>
              You have already rated this movie!
            </Text>
          </View>
        ) : null}
      </View>
    </Modal>
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
export default RateAMovieModal;
