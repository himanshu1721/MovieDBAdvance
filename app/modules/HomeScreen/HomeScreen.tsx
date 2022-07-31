import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import {
  changePopularMedia,
  fetchPopular,
} from '../../features/content/popularSlice';
import {
  changeTrendingMedia,
  fetchTrending,
} from '../../features/content/trendingSlice';
import {AppDispatch} from '../../features/store';
import CustomHeader from '../movieDetails/components/Header';
import FilterButton from './components/FilterButton';
import MovieList from './components/MovieList';
import SectionTitle from './components/SectionTitle';
import TapAndHoldModal from './components/tapAndHoldModal/TapAndHoldModal';
import styles from './styles/HomeScreenStyles';
import NavigationProp from '../../types/NavigationTypes';
import {useGetData} from './hooks/useGetData';
import {
  HomeScreenShowSkeleton,
  SkeletonCard,
} from '../../components/ShowCardSkeleton';
const HomeScreen = ({navigation}: NavigationProp) => {
  const dispatch = useDispatch<AppDispatch>();
  const popularLoading = useSelector(state => state?.popular?.loading);
  // const popularData = useSelector(state => state?.popular?.popular);
  const nextPage = useSelector(state => state?.popular?.nextPage);

  const popularMedia = useSelector(state => state?.popular?.currentMedia);
  const trendingMedia = useSelector(state => state?.trending?.currentMedia);

  const trendingLoading = useSelector(state => state?.trending?.loading);
  // const trendingData = useSelector(state => state?.trending?.trending);

  const {popularData, trendingData} = useGetData();

  useEffect(() => {
    dispatch(fetchPopular({page: 1}));
    dispatch(fetchTrending({page: 1}));
  }, []);

  const handleEndReached = () => {
    if (!loading) {
      dispatch(fetchPopular({page: nextPage + 1}));
    }
  };

  const popularFilter = [
    {id: 0, name: 'Movie'},
    {id: 1, name: 'TV'},
  ];

  const trendingFilter = [
    {id: 0, name: 'Today'},
    {id: 1, name: 'This Week'},
  ];

  const onSelectPopular = item => {
    dispatch(changePopularMedia(`${item}`));

    if (item === 'TV') {
      dispatch(fetchPopular({mediaType: 'tv', page: 1}));
    } else if (item === 'Movie') {
      dispatch(fetchPopular({page: 1}));
    }
  };

  const onSelectTrending = item => {
    dispatch(changeTrendingMedia(`${item}`));
    if (item === 'Today') {
      dispatch(fetchTrending({page: 1}));
    } else if (item === 'This Week') {
      dispatch(fetchTrending({span: 'week', page: 1}));
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <CustomHeader
            renderIcon={
              <DrawerIconComponent onTap={() => navigation.openDrawer()} />
            }
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionTitleContainer}>
                <SectionTitle title="Popular Now" />
                <FilterButton
                  onSelect={onSelectPopular}
                  value={popularMedia}
                  elements={popularFilter}
                />
              </View>
              {popularLoading ? (
                <View style={styles.loadingContainer}>
                  <HomeScreenShowSkeleton />
                </View>
              ) : (
                <MovieList
                  isPopular={true}
                  isTV={popularMedia === 'TV'}
                  data={popularData}
                />
              )}
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionTitleContainer}>
                <SectionTitle title="Trending" />
                <FilterButton
                  onSelect={onSelectTrending}
                  value={trendingMedia}
                  elements={trendingFilter}
                />
              </View>
              {trendingLoading ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size={'large'} />
                </View>
              ) : (
                <MovieList isPopular={false} data={trendingData} />
              )}
            </View>
            <View style={styles.bottomFiller} />
          </ScrollView>
        </View>
        <TapAndHoldModal />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
