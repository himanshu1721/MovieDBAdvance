import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import ReleaseDateAndRuntime from './components/ReleaseDate';
import Overview from './components/Overview';
import GenreList from './components/GenreList';
import UserScore from './components/UserScore';
import PlayTrailer from './components/PlayTrailer';
import ImageComponent from './components/ImageComponent';
import MovieTitle from './components/MovieTitle';
import {Colors} from '../../themes';
import Strings from '../../constants/Strings';
import styles from './styles/MovieDetailStyles';
import {fetchMovie} from '../../features/detail/detailSlice';
import HeaderComponent from './components/Header';
import {
  saveToWatchLater,
  removeFromWatchLater,
} from '../../features/watchLater/watchLaterSlice';
import StarRating from './components/StarRating';
import {
  addMovieInRatingSection,
  getRating,
} from '../../features/rating/ratingSlice';

const DetailScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [save, setSave] = useState(0);
  const isLoading = useSelector(state => state.detail.loading);
  const movies = useSelector(state => state.detail.movieDetails);
  const error = useSelector(state => state.detail.error);
  const watchLaterAll = useSelector(state => state.watchLater.watchLaterID);
  const ratedMovies = useSelector(state => state.rating.movieRatings);
  const allRatedMovies = () => {
    const x = ratedMovies.filter(obj => {
      return obj.movieID === movies.id;
    });
    return x;
  };

  const isMovieWatchListed = () => {
    return watchLaterAll.indexOf(movies.id) !== -1;
  };

  useEffect(() => {
    allRatedMovies();
    dispatch(fetchMovie({type: route.params.type, movieID: route.params.id}));
  }, []);

  const onClickSaveIcon = () => {
    isMovieWatchListed()
      ? dispatch(removeFromWatchLater({movie: movies, id: movies.id}))
      : dispatch(saveToWatchLater({movie: movies, id: movies.id}));
  };

  function ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
    setSave(rating);
    dispatch(getRating({movieId: movies.id, rating: rating}));
    dispatch(addMovieInRatingSection({movie: movies, rating: rating}));
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent onTap={() => navigation.pop()} />
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
                <TouchableOpacity onPress={onClickSaveIcon}>
                  <Image
                    style={{
                      height: 28,
                      width: 28,
                    }}
                    source={
                      isMovieWatchListed()
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
            {/* //************ */}
            <View style={{marginVertical: 15}}>
              <AirbnbRating
                showRating={false}
                onFinishRating={ratingCompleted}
                count={5}
                defaultRating={allRatedMovies()?.rating ?? 0}
                size={28}
                reviewSize={0}
              />
            </View>

            {/* //************ */}
            {/* <Button title="i" onPress={() => console.log('=>', save)} /> */}
            <Overview description={movies?.overview} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
//make this component available to the app
export default DetailScreen;
