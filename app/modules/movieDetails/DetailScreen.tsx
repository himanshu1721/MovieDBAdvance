import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import Strings from '../../constants/Strings';
import {fetchMovie} from '../../features/detail/detailSlice';
import {
  addMovieInRatingSection,
  getRating,
} from '../../features/rating/ratingSlice';
import {
  removeFromWatchLater,
  saveToWatchLater,
} from '../../features/watchLater/watchLaterSlice';
import {Colors} from '../../themes';
import GenreList from './components/GenreList';
import HeaderComponent from './components/Header';
import ImageComponent from './components/ImageComponent';
import MovieTitle from './components/MovieTitle';
import Overview from './components/Overview';
import ReleaseDateAndRuntime from './components/ReleaseDate';
import UserScore from './components/UserScore';
import styles from './styles/MovieDetailStyles';

const DetailScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [save, setSave] = useState(0);
  const isLoading = useSelector(state => state.detail.loading);
  const movies = useSelector(state => state.detail.movieDetails);
  const error = useSelector(state => state.detail.error);
  const watchLaterAll = useSelector(state => state.watchLater.watchLaterID);
  const ratedMovies = useSelector(state => state.rating.movieRatings);
  const currentUserUID = useSelector(state => state.auth.userUID);
  const allRatedMovies = () => {
    const x = ratedMovies.filter(obj => {
      return obj.movieID === movies?.id;
    });
    if (x.length > 0) {
      return x[0].rating;
    }
    return 0;
  };

  const isMovieWatchListed = () => {
    return watchLaterAll.indexOf(movies.id) !== -1;
  };

  useEffect(() => {
    dispatch(fetchMovie({type: route.params.type, movieID: route.params.id}));
  }, []);

  useEffect(() => {
    allRatedMovies();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('MovieRating')
      .doc(`507086`)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
      });

    return () => subscriber();
  }, []);

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

  const onClickSaveIcon = () => {
    isMovieWatchListed()
      ? dispatch(removeFromWatchLater({movie: movies, id: movies.id}))
      : dispatch(saveToWatchLater({movie: movies, id: movies.id}));
  };

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

  function ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
    setSave(rating);
    dispatch(getRating({movieId: movies.id, rating: rating}));
    dispatch(addMovieInRatingSection({movie: movies, rating: rating}));
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent backButton onTap={() => navigation.pop()} />
      {isLoading && (
        <View style={styles.subContainer}>
          <ActivityIndicator color={Colors.white} />
        </View>
      )}
      {error && (
        <View style={styles.subContainer}>
          <Text>{Strings.errorMessageDetailScreen}</Text>
        </View>
      )}
      {!isLoading && !error && (
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
              <UserScore vote_average={movies?.vote_average} />
              <View style={styles.componentSeparator} />
              <View
                style={{
                  flex: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={onSavingMovie}>
                  <Image
                    style={{
                      height: 28,
                      width: 28,
                    }}
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
            <Button
              title="ih"
              onPress={() => {
                firestore()
                  .collection('users')
                  .doc(currentUserUID)
                  .collection('watchLater')
                  .doc(`${movies?.id}`)
                  .set(movies);
              }}
            />
            <Button
              title="delete"
              onPress={() => {
                firestore()
                  .collection('users')
                  .doc(currentUserUID)
                  .collection('watchLater')
                  .doc(`${movies?.id}`)
                  .delete();
              }}
            />
            <ReleaseDateAndRuntime
              runTime={movies?.runtime ?? null}
              releaseDate={movies?.release_date ?? movies?.first_air_date}
            />
            <GenreList genres={movies?.genres} />
            <View style={styles.itemSeparator} />
            <View style={{marginVertical: 15}}>
              <AirbnbRating
                showRating={false}
                onFinishRating={ratingCompleted}
                count={5}
                defaultRating={allRatedMovies()}
                size={28}
                reviewSize={0}
              />
            </View>
            <Overview description={movies?.overview} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default DetailScreen;
