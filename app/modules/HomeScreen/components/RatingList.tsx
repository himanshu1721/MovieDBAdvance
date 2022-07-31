//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPopular} from '../../../features/content/popularSlice';
import {setFocusDetail} from '../../../features/focus/focusSlice';
import MovieCard from '../components/MovieCard';
import styles from '../styles/MovieListStyles';

// create a component
const RatingList = ({data, isTV = false, type, isPopular}) => {
  const flatListRef = useRef();
  const dispatch = useDispatch();

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
      ListFooterComponent={() => <View style={styles.listFooterComponent} />}
      ItemSeparatorComponent={() => {
        return <View style={styles.itemSeparator} />;
      }}
      keyExtractor={item => `${item?.id}${Math.random()}`}
      data={data}
      initialNumToRender={5}
      renderItem={({item}) => {
        return (
          <MovieCard
            isRating={true}
            rating={item?.rating}
            item={item.movie}
            onLongTap={() => {}}
            onTap={() => {
              const mediaType = isTV ? 'tv' : 'movie';
              navigation.navigate('Detail', {
                type: mediaType,
                id: item?.movie?.id,
              });
            }}
          />
        );
      }}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RatingList;
