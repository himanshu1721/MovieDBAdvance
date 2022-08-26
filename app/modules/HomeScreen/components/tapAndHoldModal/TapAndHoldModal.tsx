import React from 'react';
import {Image, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import AppConstants from '../../../../constants/AppConstants';
import {onPressOut} from '../../../../features/focus/focusSlice';
import TapAndHoldModalBackdrop from '../../../../components/tapAndHoldModalBackdrop';
import styles from './TapAndHoldModalStyles';

const TapAndHoldModal = (): JSX.Element => {
  const dispatch = useDispatch();

  const focusMovie = useSelector(state => state?.focus?.data);
  const isHold = useSelector(state => state?.focus?.isFocus);

  return (
    <Modal
      animationOut={'fadeOut'}
      animationIn={'fadeIn'}
      style={styles.modalStyles}
      backdropColor="transparent"
      backdropOpacity={1}
      customBackdrop={
        <TapAndHoldModalBackdrop onTap={() => dispatch(onPressOut())} />
      }
      onBackdropPress={() => console.log('backdrop')}
      isVisible={isHold}>
      <View style={styles.container}>
        <Image
          style={styles.imageStyles}
          source={{
            uri: `${AppConstants.API_IMAGE}${focusMovie.backdrop_path}`,
          }}
        />
        <View style={styles.heightTen} />
        <View style={styles.titleAndOverviewContainer}>
          <Text>
            <Text style={styles.titleStyles}>
              {focusMovie?.original_title ?? focusMovie?.original_name}
            </Text>
            <Text style={styles.releaseYearStyles}>
              (
              {focusMovie?.release_date?.substring(0, 4) ??
                focusMovie?.first_air_date?.substring(0, 4)}
              )
            </Text>
          </Text>
          <View style={styles.heightTen} />
          <Text style={styles.overviewStyles}>{focusMovie.overview}</Text>
          <View style={styles.heightTen} />
          <View style={styles.heightTen} />
        </View>
      </View>
    </Modal>
  );
};

export default TapAndHoldModal;
