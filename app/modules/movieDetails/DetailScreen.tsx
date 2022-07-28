import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {AirbnbRating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchMovie,
  setHaveBeenRated,
  setHaveNotBeenRated,
} from '../../features/detail/detailSlice';
import {addMovieInRatingSection} from '../../features/rating/ratingSlice';
import {Colors} from '../../themes';
import GenreList from './components/GenreList';
import HeaderComponent from './components/Header';
import ImageComponent from './components/ImageComponent';
import MovieTitle from './components/MovieTitle';
import Overview from './components/Overview';
import RateAMovieModal from './components/RateAMovieModal';
import ReleaseDateAndRuntime from './components/ReleaseDate';
import UserScore from './components/UserScore';
import styles from './styles/MovieDetailStyles';

const DetailScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.detail.loading);
  const movies = useSelector(state => state.detail.movieDetails);
  const currentUserUID = useSelector(state => state.auth.userUID);
  const [modalVisible, setModalVisible] = useState(false);

  const [ifRatedByMeTheRating, setIfRatedByMeTheRating] = useState(0);

  const [movieRatingValue, setMovieRatingValue] = useState(0);
  const [movieRatedByValue, setMovieRatedByValue] = useState(0);
  const [myRated, setMyRated] = useState(0);

  useEffect(() => {
    dispatch(fetchMovie({type: route.params.type, movieID: route.params.id}));
  }, []);

  useEffect(() => {
    checkIfMovieExistsInRating();
    checkIfIHaveRatedTheMovieBefore();
  }, [movies?.id]);

  const [doesMovieExists, setDoesMovieExists] = useState(false);

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

  const onSavingMovie = () => {
    doesMovieExists
      ? firestore()
          .collection('users')
          .doc(currentUserUID)
          .collection('watchLater')
          .doc(`${movies?.id}`)
          .delete()
      : firestore()
          .collection('users')
          .doc(currentUserUID)
          .collection('watchLater')
          .doc(`${movies?.id}`)
          .set(movies);
  };

  const getMovieRatingStar = () => {
    if (movieRatedByValue === 0) return 0;
    const starRating = movieRatingValue / movieRatedByValue;
    return starRating;
  };

  const checkIfMovieExistsInRating = async () => {
    const user = await firestore()
      .collection('MovieRating')
      .doc(`${movies?.id}`)
      .get();
    if (user.data()) {
      console.log('User', user.data());
      setMovieRatedByValue(user?.data()?.ratedBy);
      setMovieRatingValue(user?.data()?.rating);
      getMovieRatingStar();
    } else {
      console.log('Data does not exist');
      setMovieRatedByValue(0);
      setMovieRatingValue(0);
    }
  };

  const checkIfIHaveRatedTheMovieBefore = async () => {
    const user = await firestore()
      .collection('users')
      .doc(currentUserUID)
      .collection('myRatings')
      .doc(`${movies?.id}`)
      .get();
    if (user?.data()) {
      dispatch(setHaveBeenRated());
      setMyRated(user?.data().rating);
      console.log('=>>', myRated);
    } else {
      dispatch(setHaveNotBeenRated());
      setMyRated(0);
    }
  };

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
    setIfRatedByMeTheRating(rating);
    getRating();
    updateTotalRating(rating);
    dispatch(addMovieInRatingSection({movie: movies, rating: rating}));
  };

  const getRating = () => {
    firestore()
      .collection('MovieRating')
      .doc(`${movies?.id}`)
      .set({ratedBy: firestore.FieldValue.increment(1) ?? 0}, {merge: true});
  };

  const updateTotalRating = rating => {
    firestore()
      .collection('MovieRating')
      .doc(`${movies?.id}`)
      .set({rating: firestore.FieldValue.increment(rating)}, {merge: true});
  };

  const rateMovie = () => {
    firestore()
      .collection('MovieRating')
      .doc(`${movies.id}`)
      .collection('ratedByUsers')
      .doc(currentUserUID)
      .set({rated: ifRatedByMeTheRating});
    updateMovieInMyRatingsFB();
  };

  const updateMovieInMyRatingsFB = () => {
    firestore()
      .collection('users')
      .doc(currentUserUID)
      .collection('myRatings')
      .doc(`${movies?.id}`)
      .set({rating: ifRatedByMeTheRating, item: movies});
    dispatch(setHaveBeenRated());
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent backButton onTap={() => navigation.pop()} />
      {isLoading ? (
        <View style={styles.subContainer}>
          <ActivityIndicator color={Colors.white} />
        </View>
      ) : (
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
              <UserScore vote_average={movies?.vote_average ?? 1} />
              <View style={styles.componentSeparator} />
              <View style={styles.movieSaveIconWrapper}>
                <TouchableOpacity onPress={onSavingMovie}>
                  <Image
                    style={styles.movieSaveIconStyles}
                    source={
                      doesMovieExists
                        ? require('../../assets/images/bookmarkFilled.png')
                        : require('../../assets/images/bookmarkOutline.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.itemSeparator} />
            <ReleaseDateAndRuntime
              runTime={movies?.runtime ?? null}
              releaseDate={movies?.release_date ?? movies?.first_air_date}
            />
            <GenreList genres={movies?.genres} />
            <View style={styles.itemSeparator} />
            <View style={styles.ratingContainerWrapper}>
              <View style={styles.flexOne} />
              <View style={styles.ratingContainer}>
                <AirbnbRating
                  isDisabled={true}
                  showRating={false}
                  onFinishRating={ratingCompleted}
                  count={5}
                  defaultRating={getMovieRatingStar()}
                  size={28}
                  reviewSize={0}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  checkIfIHaveRatedTheMovieBefore();
                }}
                style={styles.rateMovieWrapper}>
                <Text style={styles.rateMovieTextStyles}>Rate</Text>
                <Text style={styles.rateMovieTextStyles}>Movie</Text>
              </TouchableOpacity>
            </View>
            <Overview description={movies?.overview} />
          </View>
        </ScrollView>
      )}
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
