import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Button,
  ScrollView,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import {
  fetchPopular,
  changePopularMedia,
  fetchPopularTV,
} from '../../features/content/popularSlice';
import {
  changeTrendingMedia,
  fetchTrending,
  fetchTrendingWeekly,
} from '../../features/content/trendingSlice';
import MovieList from './components/MovieList';
import CustomHeader from '../movieDetails/components/Header';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SectionTitle from './components/SectionTitle';
import FilterButton from './components/FilterButton';
import {AppDispatch} from '../../features/store';
import Modal from 'react-native-modal';
import AppConstants from '../../constants/AppConstants';
import {onPressOut} from '../../features/focus/focusSlice';
import TapAndHoldModal from './components/tapAndHoldModal/TapAndHoldModal';
import RatingList from './components/RatingList';

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
          <CustomHeader backButton={false} />
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

{
  /* <Modal isVisible={isModalVisible}>
  <Modal.Container>
    <Modal.Header title="LogRocket is fab!" />
    <Modal.Body>
      <Text style={styles.text}>Agree to continue with this guide</Text>
      </Modal.Body>
    <Modal.Footer>
      <Button title="I agree" onPress={handleModal} />
    </Modal.Footer>
  </Modal.Container>
</Modal> */
}

{
  /* <BlurView
style={StyleSheet.absoluteFill}
blurType="light"
blurAmount={55}
reducedTransparencyFallbackColor="white">
<Text>
  I'm the non blurred text because I got rendered on top of the
  BlurView
</Text>
</BlurView> */
}
