//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component, useRef} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchPopular,
  fetchPopularTV,
} from '../../../../features/content/popularSlice';
import MovieCard from '../MovieCard';

// create a component
const MyComponent = ({data, isTV = false, type, isPopular}) => {
  const flatListRef = useRef();

  const popularMedia = useSelector(state => state?.popular?.currentMedia);
  const nextPagePopular = useSelector(state => state?.popular?.nextPage);
  const dispatch = useDispatch();
  const onEndReached = () => {
    if (isPopular) {
      if (popularMedia === 'Movie') {
        dispatch(fetchPopular({page: nextPagePopular + 1}));
      } else {
        dispatch(fetchPopular({mediaType: 'tv', page: nextPagePopular + 1}));
      }
    }
  };

  const navigation = useNavigation();
  return (
    <FlatList
      ref={flatListRef}
      decelerationRate={0.4}
      maxToRenderPerBatch={6}
      removeClippedSubviews
      showsHorizontalScrollIndicator={false}
      bounces={false}
      horizontal
      ListFooterComponent={() => <View style={{width: 10}}></View>}
      ItemSeparatorComponent={() => {
        return <View style={{width: 26}}></View>;
      }}
      keyExtractor={item => `${item?.id}${Math.random()}`}
      data={data}
      initialNumToRender={5}
      renderItem={({item}) => {
        return (
          <MovieCard
            item={item}
            onTap={() => {
              const mediaType = isTV ? 'tv' : 'movie';
              navigation.navigate('Detail', {type: mediaType, id: item?.id});
            }}
          />
        );
      }}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;
