import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular } from '../../../features/content/popularSlice';
import { fetchPopularTV } from '../../../features/content/popularTVSlice';
import { fetchTrending } from '../../../features/content/trendingSlice';
import { setFocusDetail } from '../../../features/focus/focusSlice';
import MovieCard from '../components/MovieCard';
import { useGetNextPage } from '../hooks/useGetNextPage';
import styles from '../styles/MovieListStyles';

interface ItemProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieListProps {
  contentIndex: number;
  data: ItemProps[];
  isTV?: boolean;
}

const MovieList = ({
  contentIndex,
  data,
  isTV = false,
}: MovieListProps): JSX.Element => {
  const flatListRef = useRef();

  const { nextPagePopular, nextPagePopularTV, nextPageTrending } =
    useGetNextPage();

  const dispatch = useDispatch();
  const onEndReached = () => {
    if (contentIndex === 0) {
      dispatch(fetchPopular({ page: nextPagePopular }));
    } else if (contentIndex === 1) {
      dispatch(fetchPopularTV({ page: nextPagePopularTV }));
    } else {
      dispatch(fetchTrending({ page: nextPageTrending }));
    }
  };

  const renderItem = ({ item }) => {
    return (
      <MovieCard
        item={item}
        onLongTap={() => dispatch(setFocusDetail(item))}
        onTap={() => {
          const mediaType = isTV ? 'tv' : 'movie';
          navigation.navigate('Detail', { type: mediaType, id: item?.id });
        }}
      />
    );
  };

  const navigation = useNavigation();
  return (
    <FlatList
      ref={flatListRef}
      // decelerationRate={0.4}
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
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MovieList;
