import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import ContentListWithHeading from '../../components/ContentListWithHeading/ContentListWithHeading';
import HeaderTitle from '../../components/HeaderTitle';
import { Strings } from '../../constants';
import { fetchPopularGenre } from '../../features/genre/genrePopularSlice';
import { fetchTopRatedGenre } from '../../features/genre/genreTopRatedSlice';
import HeaderComponent from '../movieDetails/components/Header';
import MovieList from './components/MovieList';
import styles from './styles/GenreMoviesStyles';

const GenreMovies = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(state => state?.genrePopular?.data);
  const topRatedMovies = useSelector(state => state?.genreTopRated?.data);
  const popularLoading = useSelector(state => state?.genrePopular?.loading);
  const topRatedLoading = useSelector(state => state?.genreTopRated?.loading);

  useEffect(() => {
    dispatch(fetchTopRatedGenre({ id: route.params.genreId }));
    dispatch(fetchPopularGenre({ id: route?.params?.genreId }));
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          renderMiddle={<HeaderTitle title={route?.params?.genreName} />}
          backButton
          onTap={() => navigation.pop()}
        />
        <ScrollView>
          <ContentListWithHeading
            loading={popularLoading}
            heading={Strings.popularNow}>
            <MovieList data={popularMovies} />
          </ContentListWithHeading>
          <ContentListWithHeading
            loading={topRatedLoading}
            heading={Strings.topRated}>
            <MovieList data={topRatedMovies} />
          </ContentListWithHeading>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default GenreMovies;
