import React, { useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MovieCard from '../../HomeScreen/components/MovieCard';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setFocusDetail } from '../../../features/focus/focusSlice';

const MovieList = ({ data }) => {
  console.log('the data', data);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const flatListRef = useRef();

  const renderItem = ({ item }) => {
    return (
      <MovieCard
        item={item}
        onLongTap={() => dispatch(setFocusDetail(item))}
        onTap={() => {
          const mediaType = 'movie';
          navigation.navigate('Detail', { type: mediaType, id: item?.id });
        }}
      />
    );
  };

  return (
    <FlatList
      ref={flatListRef}
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
      renderItem={renderItem}
      // onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  listFooterComponent: { width: 10 },
  itemSeparator: { width: 26 },
});

export default MovieList;
