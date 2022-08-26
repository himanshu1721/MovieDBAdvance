import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import HeaderTitle from '../../components/HeaderTitle';
import { Strings } from '../../constants';
import { fetchPeople } from '../../features/people/PeopleSlice';
import HeaderComponent from '../movieDetails/components/Header';
import MovieStarCard from './components/MovieStarCard';
import styles from './styles/PeopleListStyles';

const PeopleList = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const people = useSelector(state => state.people.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople({ page: currentPage }));
  }, [dispatch, currentPage]);

  const onEndReached = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          renderMiddle={<HeaderTitle title={Strings.movieStars} />}
          renderIcon={
            <DrawerIconComponent onTap={() => navigation.openDrawer()} />
          }
          onTap={() => navigation.pop()}
        />
        <View style={styles.genresContainer}>
          <FlatList
            data={people}
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
            renderItem={({ item }) => <MovieStarCard item={item} />}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PeopleList;
