import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../assets/images';
import { Strings } from '../../constants';
import AppConstants, { YOUTUBE_API_KEY } from '../../constants/AppConstants';
import {
  setHaveBeenRated,
  setHaveNotBeenRated,
} from '../../features/detail/detailSlice';
import { addMovieInRatingSection } from '../../features/rating/ratingSlice';
import { useGetUserAdultStatus } from '../../hooks/useGetUserAdultStatus';
import { Colors, moderateScale } from '../../themes';
import AdultContentWarning from './components/AdultContent';
import GenreList from './components/GenreList';
import HeaderComponent from './components/Header';
import ImageComponent from './components/ImageComponent';
import MovieTitle from './components/MovieTitle';
import OTTLogo from './components/OTTLogo';
import Overview from './components/Overview';
import RateAMovieModal from './components/RateAMovieModal';
import ReleaseDateAndRuntime from './components/ReleaseDate';
import UserScore from './components/UserScore';
import { useCheckMovieRating } from './hooks/useCheckMovieRating';
import { useGetMovies } from './hooks/useGetMovie';
import { useSaveUnsaveFirebase } from './hooks/useSaveUnsaveFirebase';
import { useUpdateMovieRatings } from './hooks/useUpdateMovieRatings';
import styles from './styles/MovieDetailStyles';
import { DetailScreenProps } from './types/DetailScreenTypes';
import {
  getMovieRatedByPeopleNumber,
  getMovieRatingStar,
  updateTotalRating,
} from './utils/helperFunctions';

const DetailScreen = ({ navigation, route }: DetailScreenProps) => {
  const LinkingFunction = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const [contentType, setContentType] = useState('');

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.detail.loading);
  const currentUserUID = useSelector(state => state.auth.userUID);
  const { isCurrentUserAdult } = useGetUserAdultStatus();
  const [modalVisible, setModalVisible] = useState(false);

  const [ifRatedByMeTheRating, setIfRatedByMeTheRating] = useState(0);
  const { movieRatingValue, movieRatedByValue } = useCheckMovieRating();

  const [myRated, setMyRated] = useState(0);
  const [doesMovieExists, setDoesMovieExists] = useState(false);
  const [doesMovieExistFavorites, setDoesMovieExistFavorites] = useState(false);
  const { onSavingMovie, getRating, onAddingToFavorites } =
    useSaveUnsaveFirebase(doesMovieExists, doesMovieExistFavorites);

  const { rateMovie } = useUpdateMovieRatings(ifRatedByMeTheRating);

  const { movies } = useGetMovies({
    t: route?.params?.type,
    id: route?.params?.id,
  });

  useEffect(() => {
    checkIfIHaveRatedTheMovieBefore();
    setContentType(route?.params?.type);
  }, [movies?.id]);

  useEffect(() => {
    const m = firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .collection('watchLater')
      .doc(`${movies?.id}`);

    m.onSnapshot(querySnap => {
      const data = querySnap.exists;
      if (data) {
        setDoesMovieExists(true);
      } else {
        setDoesMovieExists(false);
      }
    });
  }, [setDoesMovieExists, movies?.id]);

  useEffect(() => {
    const m = firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .collection('favorites')
      .doc(`${movies?.id}`);

    m.onSnapshot(querySnap => {
      const data = querySnap.exists;
      if (data) {
        setDoesMovieExistFavorites(true);
      } else {
        setDoesMovieExistFavorites(false);
      }
    });
  }, [setDoesMovieExistFavorites, movies?.id]);

  const checkIfIHaveRatedTheMovieBefore = async () => {
    const user = await firestore()
      .collection('users')
      .doc(currentUserUID)
      .collection('myRatings')
      .doc(`${movies?.id}`)
      .get();
    if (user?.data()) {
      dispatch(setHaveBeenRated());
      setMyRated(user?.data()?.rating);
    } else {
      dispatch(setHaveNotBeenRated());
      setMyRated(0);
    }
  };

  const ratingCompleted = (rating: number) => {
    setIfRatedByMeTheRating(rating);
    getRating();
    updateTotalRating(rating, movies?.id);
    dispatch(addMovieInRatingSection({ rating: rating }));
  };

  const getTrailerLink = async () => {
    const getType = movies?.original_title ?? movies?.original_name;
    const data = await axios.get(
      `${AppConstants.YOUTUBE_BASE_URL}search?part=snippet&maxResults=1&q=${getType} trailer&type=video&key=${YOUTUBE_API_KEY}`,
    );
    const z = data?.data?.items[0]?.id?.videoId;
    LinkingFunction(`${AppConstants.YOUTUBE_WATCH_BASE_URL}${z}`);
  };

  const canViewContent = () => {
    if (!movies?.adult) return true;
    if (isCurrentUserAdult) return true;
    else return false;
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent backButton onTap={() => navigation.pop()} />
      {isLoading && (
        <View style={styles.subContainer}>
          <ActivityIndicator color={Colors.white} />
        </View>
      )}
      {!isLoading && canViewContent() && (
        <ScrollView bounces={false}>
          <ImageComponent
            poster={movies?.poster_path}
            backdrop={movies?.backdrop_path}
          />
          <View>
            <MovieTitle
              releaseYear={movies?.release_date ?? movies?.first_air_date}
              title={movies?.title ?? movies?.original_name}
            />
            <View style={styles.itemSeparator} />
            <View style={styles.userScoreAndPlayContainer}>
              <TouchableOpacity
                onPress={() => getTrailerLink()}
                activeOpacity={0.7}
                style={styles.watchTrailerButton}>
                <View style={styles.extraViewWatchTrailer} />
                <View>
                  <Text style={styles.watchTrailerTextStyles}>
                    {Strings.watch}
                  </Text>
                  <Text style={styles.watchTrailerTextStyles}>
                    {Strings.trailer}
                  </Text>
                </View>
                <Image
                  style={{
                    width: moderateScale(30),
                    height: moderateScale(30),
                  }}
                  source={Icons.youtube}
                />
                <View style={styles.extraViewWatchTrailer} />
              </TouchableOpacity>
              <View style={styles.componentSeparator} />
              <UserScore vote_average={movies?.vote_average ?? 1} />
              <View style={styles.componentSeparator} />
              <View style={styles.movieSaveIconWrapper}>
                <TouchableOpacity
                  style={
                    contentType === Strings.tv
                      ? styles.inActiveSaveButton
                      : styles.activeSaveButton
                  }
                  disabled={contentType === Strings.tv}
                  onPress={onSavingMovie}>
                  <Image
                    style={styles.movieSaveIconStyles}
                    source={
                      doesMovieExists ? Icons.saveFilled : Icons.saveOutline
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            {contentType === Strings.tv && (
              <OTTLogo
                uri={`${AppConstants.API_IMAGE}${movies?.networks[0]?.logo_path}`}
              />
            )}
            <View style={styles.itemSeparator} />
            <ReleaseDateAndRuntime
              runTime={movies?.runtime ?? 1}
              releaseDate={movies?.release_date ?? movies?.first_air_date}
            />
            <GenreList genres={movies?.genres} />
            <View style={styles.itemSeparator} />
            <View style={styles.ratingContainerWrapper}>
              <View style={styles.flexOne} />
              <View style={styles.ratingContainer}>
                <AirbnbRating
                  starImage={Icons.star}
                  isDisabled={true}
                  showRating={false}
                  onFinishRating={ratingCompleted}
                  count={5}
                  defaultRating={getMovieRatingStar({
                    movieRatedByValue,
                    movieRatingValue,
                  })}
                  size={moderateScale(28)}
                  reviewSize={0}
                />
                <View style={styles.ratingAndPeopleSeparator} />
                <View>
                  <Text style={styles.totalRatings}>
                    ({getMovieRatedByPeopleNumber(movieRatedByValue)})
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                disabled={contentType === Strings.tv}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  checkIfIHaveRatedTheMovieBefore();
                }}
                style={
                  contentType === Strings.tv
                    ? styles.rateMovieWrapperTV
                    : styles.rateMovieWrapper
                }>
                <Text style={styles.rateMovieTextStyles}>Rate</Text>
                <Text style={styles.rateMovieTextStyles}>Movie</Text>
              </TouchableOpacity>
            </View>
            {contentType !== Strings.tv ? (
              <View>
                <TouchableOpacity
                  onPress={onAddingToFavorites}
                  style={styles.addToFavorites}>
                  <View style={styles.favoriteExtraViewOne} />
                  <View style={styles.heartImageWrapper}>
                    <Image
                      style={styles.heartImage}
                      source={
                        doesMovieExistFavorites
                          ? Icons.heartFilled
                          : Icons.heartOutline
                      }
                    />
                  </View>
                  <View style={styles.favoriteExtraViewTwo}>
                    <Text style={styles.addToFavoritesTextStyles}>
                      {doesMovieExistFavorites
                        ? Strings.addedToFavorites
                        : Strings.addToFavorites}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}
            <Overview description={movies?.overview} />
          </View>
        </ScrollView>
      )}
      {!isLoading && !canViewContent() && <AdultContentWarning />}
      <RateAMovieModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        ratingCompleted={ratingCompleted}
        myRated={myRated}
        rateMovie={rateMovie}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;
