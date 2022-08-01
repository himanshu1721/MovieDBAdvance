import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import {HomeScreenShowSkeleton} from '../../components/ShowCardSkeleton';
import NavigationProp from '../../types/NavigationTypes';
import CustomHeader from '../movieDetails/components/Header';
import MovieList from './components/MovieList';
import SectionTitle from './components/SectionTitle';
import TapAndHoldModal from './components/tapAndHoldModal/TapAndHoldModal';
import {useGetData} from './hooks/useGetData';
import styles from './styles/HomeScreenStyles';
const HomeScreen = ({navigation}: NavigationProp) => {
  const popularLoading = useSelector(state => state?.popular?.loading);
  const trendingLoading = useSelector(state => state?.trending?.loading);
  const {popularData, trendingData, popularTVData} = useGetData();

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
                <SectionTitle title="Popular Movies" />
              </View>
              {popularLoading ? (
                <View style={styles.loadingContainer}>
                  <HomeScreenShowSkeleton />
                </View>
              ) : (
                <MovieList
                  contentIndex={0}
                  isPopular={true}
                  isTV={false}
                  data={popularData}
                />
              )}
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionTitleContainer}>
                <SectionTitle title="Popular TV" />
              </View>
              {popularLoading ? (
                <View style={styles.loadingContainer}>
                  <HomeScreenShowSkeleton />
                </View>
              ) : (
                <MovieList
                  contentIndex={1}
                  isPopular={true}
                  isTV={true}
                  data={popularTVData}
                />
              )}
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionTitleContainer}>
                <SectionTitle title="Trending" />
              </View>
              {trendingLoading ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size={'large'} />
                </View>
              ) : (
                <MovieList
                  contentIndex={2}
                  isPopular={false}
                  isTV={false}
                  data={trendingData}
                />
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
