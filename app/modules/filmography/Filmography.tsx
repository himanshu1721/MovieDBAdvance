import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import MovieBrief from '../../components/MovieBrief';
import { Strings } from '../../constants';
import {
  clearFilmography,
  fetchFilmography,
} from '../../features/filmography/filmographySlice';
import HeaderComponent from '../movieDetails/components/Header';
import { useGetFilmography } from './hooks/useGetFilmography';
import styles from './styles/FilmographyStyles';

const Filmography = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { films, loading, loadMore } = useGetFilmography();
  const [page, setPage] = useState(1);

  const onEndReached = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(clearFilmography());
  }, [route.params.id]);

  useEffect(() => {
    dispatch(fetchFilmography({ id: route.params.id, page: page }));
  }, [page]);

  const renderFooter = () => {
    return (
      <View>
        {loadMore ? (
          <View style={styles.footerStyles}>
            <ActivityIndicator />
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaProvider style={styles.mainContainer}>
      <SafeAreaView>
        <HeaderComponent backButton onTap={() => navigation.pop()} />
        <View style={styles.container}>
          {loading ? (
            <View style={styles.loadingStyles}>
              <ActivityIndicator />
            </View>
          ) : (
            <FlatList
              initialNumToRender={4}
              maxToRenderPerBatch={8}
              keyExtractor={item => String(item?.id)}
              bounces={false}
              removeClippedSubviews={true}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              ListHeaderComponent={() => <View style={styles.itemSeparator} />}
              ListFooterComponent={renderFooter}
              onEndReached={onEndReached}
              renderItem={({ item }) => {
                return (
                  <MovieBrief
                    item={item}
                    onTap={() =>
                      navigation.navigate(Strings.detailScreen, {
                        type: Strings.movie,
                        id: item?.id,
                      })
                    }
                  />
                );
              }}
              data={films}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Filmography;
