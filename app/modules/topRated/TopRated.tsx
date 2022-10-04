import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import HeaderTitle from '../../components/HeaderTitle';
import MovieBrief from '../../components/MovieBrief';
import { Strings } from '../../constants';
import { getTopRated } from '../../features/topRated/services';
import { useGetUserAdultStatus } from '../../hooks/useGetUserAdultStatus';
import NavigationProp from '../../types/NavigationTypes';
import CustomHeader from '../movieDetails/components/Header';
import styles from './styles/TopRatesStyles';

const TopRated = ({ navigation }: NavigationProp) => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(state => state?.topRated?.topRatedMovies);
  const loading = useSelector(state => state?.topRated?.loading);
  const { isCurrentUserAdult } = useGetUserAdultStatus();
  useEffect(() => {
    dispatch(getTopRated({ isCurrentUserAdult }));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <MovieBrief
        item={item}
        onTap={() =>
          navigation.navigate('Detail', {
            type: 'movie',
            id: item?.id,
          })
        }
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color={Colors.white} size={'large'} />
          </View>
        ) : (
          <View style={styles.container}>
            <CustomHeader
              renderMiddle={<HeaderTitle title={Strings.topRated} />}
              renderIcon={
                <DrawerIconComponent onTap={() => navigation.openDrawer()} />
              }
            />
            <FlatList
              ListHeaderComponent={() => <View style={styles.itemSeparator} />}
              maxToRenderPerBatch={3}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              keyExtractor={item => item?.id}
              showsVerticalScrollIndicator={false}
              data={topRatedMovies}
              renderItem={renderItem}
            />
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TopRated;
