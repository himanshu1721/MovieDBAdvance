import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import HeaderTitle from '../../components/HeaderTitle';
import MovieBrief from '../../components/MovieBrief';
import { getTopRated } from '../../features/topRated/topRatedSlice';
import CustomHeader from '../movieDetails/components/Header';
import styles from './styles/TopRatesStyles';
import NavigationProp from '../../types/NavigationTypes';
import { Strings } from '../../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TopRated = ({ navigation }: NavigationProp) => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(state => state?.topRated?.topRatedMovies);
  const loading = useSelector(state => state?.topRated?.loading);
  useEffect(() => {
    dispatch(getTopRated());
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
              decelerationRate={2}
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
