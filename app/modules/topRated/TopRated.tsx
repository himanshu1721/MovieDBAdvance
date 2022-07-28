import React, {useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppConstants from '../../constants/AppConstants';
import {getTopRated} from '../../features/topRated/topRatedSlice';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../movieDetails/components/Header';
import {Colors} from '../../themes';
import MovieBrief from '../../components/MovieBrief';

const TopRated = ({navigation}) => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(state => state.topRated.topRatedMovies);
  useEffect(() => {
    dispatch(getTopRated());
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: '#061422',
            width: '100%',
            alignItems: 'center',
          }}>
          <CustomHeader
            renderMiddle={
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '700',
                  color: Colors.limeGreen,
                }}>
                Top Rated
              </Text>
            }
            renderIcon={
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../../assets/images/drawer.png')}
                />
              </TouchableOpacity>
            }
          />
          <FlatList
            maxToRenderPerBatch={3}
            ItemSeparatorComponent={() => <View style={{height: 15}}></View>}
            decelerationRate={0.5}
            keyExtractor={item => `${Math.random()}`}
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
  },
});

export default TopRated;
