import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';
import HeaderComponent from './components/Header';
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

interface MovieDetailProps {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const MovieDetail = ({navigation, route}: MovieDetailProps) => {
  const dispatch = useDispatch();
  const movies = useSelector(MovieSelectors.getMovie);
  const isLoading = useSelector(MovieSelectors.getFetchDetailScreen);
  const error = useSelector(MovieSelectors.getErrorDetailScreen);

  useEffect(() => {
    if (route?.params?.movieID) {
      dispatch(MovieActions.movieSingleRequest(route?.params?.movieID));
    } else if (route?.params?.tvID) {
      dispatch(MovieActions.tvSingleRequest(route?.params?.tvID));
    }
  }, [dispatch, route?.params?.movieID, route?.params?.tvID]);

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
              <PlayTrailer />
            </View>
            <View style={styles.itemSeparator} />
            <ReleaseDateAndRuntime
              runTime={movies?.runtime ?? null}
              releaseDate={movies?.release_date ?? movies?.first_air_date}
            />
            <GenreList genres={movies?.genres} />
            <View style={styles.itemSeparator} />
            <Overview description={movies?.overview} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MovieDetail;
