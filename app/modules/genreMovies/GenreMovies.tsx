import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularGenre } from '../../features/genre/genrePopularSlice';
import { fetchTopRatedGenre } from '../../features/genre/genreTopRatedSlice';
import MovieList from './components/MovieList';
import HeaderComponent from '../movieDetails/components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HeaderTitle from '../../components/HeaderTitle';
import SectionTitle from '../../components/ContentListWithHeading/components/SectionTitle';
import { HomeScreenShowSkeleton } from '../../components/ShowCardSkeleton';
import { scale, verticalScale } from '../../themes';
import { Strings } from '../../constants';
import ContentListWithHeading from '../../components/ContentListWithHeading/ContentListWithHeading';

const GenreMovies = ({ route, navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRatedGenre({ id: route.params.genreId }));
    dispatch(fetchPopularGenre({ id: route?.params?.genreId }));
  }, []);

  const popularMovies = useSelector(state => state?.genrePopular?.data);
  const topRatedMovies = useSelector(state => state?.genreTopRated?.data);

  const popularLoading = useSelector(state => state?.genrePopular?.loading);
  const topRatedLoading = useSelector(state => state?.genreTopRated?.loading);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: { paddingHorizontal: scale(10) },
  sectionTitleContainer: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(2),
    marginVertical: verticalScale(5),
    marginTop: verticalScale(10),
  },
  loadingContainer: {
    justifyContent: 'center',
    flex: 1,
    // height: verticalScale(400),
  },
  bottomFiller: { height: 200 },
});

export default GenreMovies;
