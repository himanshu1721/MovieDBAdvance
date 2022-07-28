import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import HeaderTitle from '../../components/HeaderTitle';
import MovieBrief from '../../components/MovieBrief';
import {getTopRated} from '../../features/topRated/topRatedSlice';
import CustomHeader from '../movieDetails/components/Header';

const TopRated = ({navigation}) => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(state => state?.topRated?.topRatedMovies);
  const loading = useSelector(state => state?.topRated?.loading);
  useEffect(() => {
    dispatch(getTopRated());
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {loading ? (
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.container}>
            <CustomHeader
              renderMiddle={<HeaderTitle title={'Top Rated'} />}
              renderIcon={
                <DrawerIconComponent onTap={() => navigation.openDrawer()} />
              }
            />
            <FlatList
              maxToRenderPerBatch={3}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              decelerationRate={0.5}
              keyExtractor={item => item?.id}
              showsVerticalScrollIndicator={false}
              data={topRatedMovies}
              renderItem={({item}) => {
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
              }}
            />
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#061422',
    width: '100%',
    alignItems: 'center',
  },
  itemSeparator: {height: 15},
});

export default TopRated;
