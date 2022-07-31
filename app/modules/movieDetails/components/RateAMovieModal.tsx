import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {AirbnbRating} from 'react-native-ratings';
import {Colors, moderateScale} from '../../../themes';
import {useSelector} from 'react-redux';
import styles from '../styles/RateAMovieModalStyles';

interface RateAMovieModalProps {
  modalVisible: boolean;
  ratingCompleted: (arg0: number) => void;
  setModalVisible: (arg0: boolean) => void;
  myRated: number;
  rateMovie: () => void;
}

const RateAMovieModal = ({
  modalVisible,
  ratingCompleted,
  setModalVisible,
  myRated,
  rateMovie,
}: RateAMovieModalProps) => {
  const isThisMovieRatedByMeBefore = useSelector(
    state => state?.detail?.haveBeenRatedBeforeByMe,
  );

  return (
    <Modal
      animationIn={'fadeIn'}
      style={styles.modalStyles}
      backdropColor={Colors.backdropWhite}
      backdropOpacity={0.7}
      onBackdropPress={() => setModalVisible(!modalVisible)}
      isVisible={modalVisible}>
      <View style={styles.container}>
        <Pressable
          hitSlop={5}
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.closeIconTouchable}>
          <Image
            source={require('../../../assets/images/close.png')}
            style={styles.closeIconStyles}
          />
        </Pressable>
        <View
          style={
            isThisMovieRatedByMeBefore
              ? styles.inActiveOpacity
              : styles.activeOpacity
          }>
          <AirbnbRating
            starImage={require('../../../assets/images/star.png')}
            isDisabled={isThisMovieRatedByMeBefore}
            showRating={false}
            onFinishRating={ratingCompleted}
            count={5}
            defaultRating={myRated}
            size={moderateScale(30)}
            reviewSize={moderateScale(30)}
          />
        </View>

        <View style={styles.viewWithHeightTwenty} />
        <TouchableOpacity
          disabled={isThisMovieRatedByMeBefore}
          style={
            isThisMovieRatedByMeBefore
              ? styles.rateButtonInactiveStyles
              : styles.rateButtonStyles
          }
          onPress={() => {
            setModalVisible(!modalVisible);
            rateMovie();
          }}>
          <Text style={styles.rateTextStyles}>RATE</Text>
        </TouchableOpacity>
        <View style={styles.rateButtonAndMovieAlreadyRatedSeparator} />
        {isThisMovieRatedByMeBefore ? (
          <View>
            <Text style={styles.alreadyRatedMovieText}>
              You have already rated this movie!
            </Text>
          </View>
        ) : null}
      </View>
    </Modal>
  );
};

export default RateAMovieModal;
