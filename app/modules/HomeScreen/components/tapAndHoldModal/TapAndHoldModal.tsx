//import liraries
import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import AppConstants from '../../../../constants/AppConstants';
import {onPressOut} from '../../../../features/focus/focusSlice';

// create a component
const TapAndHoldModal = () => {
  const dispatch = useDispatch();

  const focusMovie = useSelector(state => state?.focus?.data);
  const isHold = useSelector(state => state?.focus?.isFocus);

  return (
    <Modal
      animationIn={'fadeIn'}
      style={{
        shadowColor: '#474747',
        shadowRadius: 5,
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 1,
      }}
      backdropColor="transparent"
      backdropOpacity={1}
      customBackdrop={
        <Pressable
          onPress={() => dispatch(onPressOut())}
          style={{
            width: '100%',
            height: '100%',
            opacity: 1,
            // backgroundColor: 'rgba(0,0,0,0.2)',
          }}>
          <View
            style={{
              backgroundColor: '#252525',
              position: 'absolute',
              opacity: 0.8,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}></View>
          {/* <BlurView
            style={StyleSheet.absoluteFill}
            blurType="dark"
            blurAmount={12}></BlurView> */}
        </Pressable>
      }
      onBackdropPress={() => console.log('backdrop')}
      isVisible={isHold}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          // height: 400,
        }}>
        <Image
          style={{
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            width: '100%',
            height: 200,
          }}
          source={{
            uri: `${AppConstants.API_IMAGE}${focusMovie.backdrop_path}`,
          }}
        />
        <View style={{height: 10}}></View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>
              {focusMovie?.original_title ?? focusMovie?.original_name}
            </Text>
            <Text style={{color: '#474747', fontSize: 17, fontWeight: '500'}}>
              (
              {focusMovie?.release_date?.substring(0, 4) ??
                focusMovie?.first_air_date?.substring(0, 4)}
              )
            </Text>
          </Text>
          <TouchableOpacity
            // onPress={handleModal}
            style={{height: 10}}></TouchableOpacity>
          <Text style={{letterSpacing: 0.3, fontSize: 16, fontWeight: '400'}}>
            {focusMovie.overview}
          </Text>
          <View style={{height: 20}}></View>
        </View>
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
export default TapAndHoldModal;
