import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  changePopularMedia,
  fetchPopular,
} from '../../features/content/popularSlice';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  changeTrendingMedia,
  fetchTrending,
  fetchTrendingWeekly,
} from '../../features/content/trendingSlice';
import {AppDispatch} from '../../features/store';
import CustomHeader from '../movieDetails/components/Header';
import FilterButton from './components/FilterButton';
import MovieList from './components/MovieList';
import RatingList from './components/RatingList';
import SectionTitle from './components/SectionTitle';
import TapAndHoldModal from './components/tapAndHoldModal/TapAndHoldModal';

const HomeScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const dispatch = useDispatch<AppDispatch>();
  const focusMovie = useSelector(state => state?.focus?.data);
  const isHold = useSelector(state => state?.focus?.isFocus);
  const popularLoading = useSelector(state => state?.popular?.loading);
  const popularData = useSelector(state => state?.popular?.popular);
  const nextPage = useSelector(state => state?.popular?.nextPage);
  const watchLater = useSelector(state => state.watchLater.watchLater);

  const popularMedia = useSelector(state => state?.popular?.currentMedia);
  const trendingMedia = useSelector(state => state?.trending?.currentMedia);

  const trendingLoading = useSelector(state => state?.trending?.loading);
  const trendingData = useSelector(state => state?.trending?.trending);
  const trendingNextPage = useSelector(state => state?.trending?.nextPage);
  const currentUserUID = useSelector(state => state.auth.userUID);

  const myRatings = useSelector(state => state?.rating?.movieRatingsSection);

  const [focus, setFocus] = useState();

  useEffect(() => {
    dispatch(fetchPopular({page: 1}));
    dispatch(fetchTrending({page: 1}));
  }, []);

  // const reload = () => {
  //   {
  //     if (popularMedia === 'TV') {
  //       dispatch(fetchPopularTV({page: 1}));
  //     } else {
  //       dispatch(fetchPopular({page: 1}));
  //     }
  //   }

  //   {
  //     if (trendingMedia === 'Today') {
  //       dispatch(fetchTrending({page: 1}));
  //     } else {
  //       dispatch(fetchTrendingWeekly({page: 1}));
  //     }
  //   }
  // };

  // const getUsers = async () => {
  //   const querySnap = await firestore()
  //     .collection('users')
  //     .doc(`${currentUserUID}`)
  //     .collection('watchLater')
  //     .get();
  //   const allusers = querySnap.docs.map(docSnap => docSnap.data());
  //   console.log('all users', allusers);
  //   // setThreads(allusers);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

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
      dispatch(fetchTrendingWeekly({page: 1}));
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <CustomHeader
            renderIcon={
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../../assets/images/drawer.png')}
                />
              </TouchableOpacity>
            }
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal: 10}}>
              <View
                style={{
                  zIndex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 2,
                  marginVertical: 5,
                  marginTop: 10,
                }}>
                <SectionTitle title="Popular" />
                <FilterButton
                  onSelect={onSelectPopular}
                  value={popularMedia}
                  elements={popularFilter}
                />
              </View>
              {popularLoading ? (
                <View style={{justifyContent: 'center', flex: 1, height: 400}}>
                  <ActivityIndicator size={'large'} />
                </View>
              ) : (
                <MovieList
                  type={popularMedia}
                  isPopular={true}
                  isTV={popularMedia === 'TV'}
                  data={popularData}
                />
              )}
            </View>
            <View style={{paddingHorizontal: 10}}>
              <View
                style={{
                  zIndex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 2,
                  marginVertical: 5,
                  marginTop: 10,
                }}>
                <SectionTitle title="Trending" />
                <FilterButton
                  onSelect={onSelectTrending}
                  value={trendingMedia}
                  elements={trendingFilter}
                />
              </View>
              {trendingLoading ? (
                <View style={{justifyContent: 'center', flex: 1, height: 400}}>
                  <ActivityIndicator size={'large'} />
                </View>
              ) : (
                <MovieList
                  isPopular={false}
                  type={trendingMedia}
                  data={trendingData}
                />
              )}
            </View>
            {watchLater.length > 0 && (
              <View style={{paddingHorizontal: 10}}>
                <SectionTitle title="Watch Later" />
                <MovieList type={trendingMedia} data={watchLater} />
              </View>
            )}

            {myRatings.length > 0 && (
              <View style={{paddingHorizontal: 10}}>
                <SectionTitle title="Rated by me" />
                <RatingList data={myRatings} />
              </View>
            )}
            <View style={{height: 200}}></View>
          </ScrollView>
        </View>
        <TapAndHoldModal />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
