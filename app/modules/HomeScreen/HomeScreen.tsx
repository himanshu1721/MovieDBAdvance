import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import { HomeScreenShowSkeleton } from '../../components/ShowCardSkeleton';
import NavigationProp from '../../types/NavigationTypes';
import CustomHeader from '../movieDetails/components/Header';
import MovieList from './components/MovieList';
import SectionTitle from './components/SectionTitle';
import TapAndHoldModal from './components/tapAndHoldModal/TapAndHoldModal';
import { useGetData } from './hooks/useGetData';
import { useGetLoading } from './hooks/useGetLoading';
import styles from './styles/HomeScreenStyles';

const HomeScreen = ({ navigation }: NavigationProp) => {
  const { popularData, popularTVData, trendingData } = useGetData();
  const { trendingLoading, popularTVLoading, popularLoading } = useGetLoading();

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
              </View>
              {popularLoading ? (
                <View style={styles.loadingContainer}>
                  <HomeScreenShowSkeleton />
                </View>
              ) : (
                <MovieList contentIndex={0} isTV={false} data={popularData} />
              )}
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionTitleContainer}>
                <SectionTitle title="Popular TV" />
              </View>
              {popularTVLoading ? (
                <View style={styles.loadingContainer}>
                  <HomeScreenShowSkeleton />
                </View>
              ) : (
                <MovieList contentIndex={1} isTV={true} data={popularTVData} />
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
                <MovieList contentIndex={2} data={trendingData} />
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
