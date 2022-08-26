import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../assets/images/index';
import TapAndHoldModalBackdrop from '../../components/tapAndHoldModalBackdrop';
import { Strings } from '../../constants';
import AppConstants from '../../constants/AppConstants';
import {
  fetchDetail,
  fetchImages,
} from '../../features/celebrity/celebrityDetailSlice';
import { refactorDate } from '../../services';
import HeaderComponent from '../movieDetails/components/Header';
import styles from './styles/CelebrityDetailScreenStyles';

const CelebrityDetailScreen = ({ navigation, route }) => {
  const images = useSelector(state => state.celebrity.images);
  const details = useSelector(state => state.celebrity.details);
  const loadingDetail = useSelector(state => state.celebrity.loadingDetails);
  const loadingImages = useSelector(state => state.celebrity.loadingImages);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [focusImage, setFocusImage] = useState('');

  useEffect(() => {
    dispatch(fetchImages({ id: route.params.id }));
    dispatch(fetchDetail({ id: route.params.id }));
  }, []);

  interface PersonalDetailsProps {
    image_path: ImageSourcePropType;
    label: string;
  }

  const onPressPoster = (file_path: string) => {
    setFocusImage(`${AppConstants.API_IMAGE}${file_path}`);
    setShowModal(true);
  };

  const PersonalDetail = ({ image_path, label }: PersonalDetailsProps) => {
    return (
      <View style={styles.personalDetailContainer}>
        <Image style={styles.iconStyles} source={image_path} />
        <View style={styles.iconAndTextSeparator} />
        <Text style={styles.detailTextStyles}>{label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <HeaderComponent backButton onTap={() => navigation.pop()} />
        <ScrollView bounces={false} style={styles.container}>
          <View style={styles.imageListWrapper}>
            {!loadingImages ? (
              <FlatList
                bounces={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={images}
                ItemSeparatorComponent={() => (
                  <View style={styles.imageSeparator} />
                )}
                renderItem={({ item }) => {
                  return (
                    <Pressable
                      delayLongPress={100}
                      onLongPress={() => onPressPoster(item?.file_path)}
                      onPress={() => onPressPoster(item?.file_path)}>
                      <Image
                        style={styles.posterStyles}
                        source={{
                          uri: `${AppConstants.API_IMAGE}${item?.file_path}`,
                        }}
                      />
                    </Pressable>
                  );
                }}
              />
            ) : (
              <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator />
              </View>
            )}
          </View>
          <View style={styles.subContainer}>
            {!loadingDetail ? (
              <View>
                <Text style={styles.nameStyles}>{details?.name}</Text>
                <View style={styles.nameAndDetailsSeparator} />
                <PersonalDetail
                  image_path={Icons.balloon}
                  label={refactorDate(details?.birthday)}
                />
                <PersonalDetail
                  image_path={details.gender === 2 ? Icons.male : Icons.female}
                  label={details.gender === 2 ? Strings.male : Strings.female}
                />
                <PersonalDetail
                  image_path={Icons.reel}
                  label={details.known_for_department}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.filmographyContainer}>
                  <Text style={styles.filmographyTextStyles}>
                    {Strings.seeFilmography}
                  </Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.aboutHeadingTextStyles}>
                    {Strings.about}
                  </Text>
                  <Text style={styles.aboutTextStyles}>
                    {details?.biography}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator />
              </View>
            )}
          </View>
        </ScrollView>
        <Modal
          animationOut={'fadeOut'}
          animationIn={'fadeIn'}
          style={styles.modalStyles}
          backdropColor="transparent"
          backdropOpacity={1}
          customBackdrop={
            <TapAndHoldModalBackdrop onTap={() => setShowModal(false)} />
          }
          onBackdropPress={() => setShowModal(false)}
          isVisible={showModal}>
          <View style={styles.modalImageContainer}>
            <Image
              style={styles.modalImageStyles}
              source={{ uri: focusImage }}
            />
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CelebrityDetailScreen;
