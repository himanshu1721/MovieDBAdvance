import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ContentListWithHeading from '../../components/ContentListWithHeading/ContentListWithHeading';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import { Strings } from '../../constants';
import NavigationProp from '../../types/NavigationTypes';
import CustomHeader from '../movieDetails/components/Header';
import MovieList from './components/MovieList';
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
            <ContentListWithHeading
              heading={Strings.popularNow}
              loading={popularLoading}>
              <MovieList contentIndex={0} isTV={false} data={popularData} />
            </ContentListWithHeading>
            <ContentListWithHeading
              heading={Strings.popularTV}
              loading={popularTVLoading}>
              <MovieList contentIndex={1} isTV={true} data={popularTVData} />
            </ContentListWithHeading>
            <ContentListWithHeading
              heading={Strings.trending}
              loading={trendingLoading}>
              <MovieList contentIndex={2} data={trendingData} />
            </ContentListWithHeading>
            <View style={styles.bottomFiller} />
          </ScrollView>
        </View>
        <TapAndHoldModal />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
