import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Strings } from '../../../constants';
import { setFocusDetail } from '../../../features/focus/focusSlice';
import MovieCard from '../../HomeScreen/components/MovieCard';
import styles from '../styles/MovieListStyles';
import { MovieCardProps, MovieListTypes } from '../types/GenreMovieTypes';

const MovieList = ({ data }: MovieListTypes) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const flatListRef = useRef();

  const renderItem = ({ item }: MovieCardProps) => {
    return (
      <MovieCard
        item={item}
        onLongTap={() => dispatch(setFocusDetail(item))}
        onTap={() => {
          navigation.navigate(Strings.detailScreen, {
            type: Strings.movie,
            id: item?.id,
          });
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
      keyExtractor={item => String(item?.id)}
      data={data}
      initialNumToRender={5}
      renderItem={renderItem}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MovieList;
