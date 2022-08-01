//import liraries
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import HeaderTitle from '../../components/HeaderTitle';
import {Colors} from '../../themes';
import CustomHeader from '../movieDetails/components/Header';
import EmptyList from '../ratedByMe/components/EmptyWatchList';
import ItemSeparatorMyRatings from '../ratedByMe/components/ItemSeparator';
import MyRatingMovieCard from '../ratedByMe/components/MyRatingMovieCard';
import styles from './styles/WatchListStyles';
import NavigationProp from '../../types/NavigationTypes';
import {SkeletonCard} from '../../components/ShowCardSkeleton';

const WatchList = ({navigation}: NavigationProp) => {
  const currentUserUID = useSelector(state => state.auth.userUID);

  const [threads, setThreads] = useState([]);

  const getUsers = async () => {
    const querySnap = await firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .collection('watchLater')
      .get();
    const allusers = querySnap.docs.map(docSnap => docSnap.data());
    setThreads(allusers);
  };

  useEffect(() => {
    getUsers();
  }, [threads]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          renderMiddle={<HeaderTitle title={'WatchList'} />}
          renderIcon={
            <DrawerIconComponent onTap={() => navigation.openDrawer()} />
          }
          backButton={false}
        />
        <View style={styles.subContainer}>
          <FlatList
            ListEmptyComponent={<EmptyList title="WatchList is Empty" />}
            ItemSeparatorComponent={() => <ItemSeparatorMyRatings />}
            showsVerticalScrollIndicator={false}
            maxToRenderPerBatch={3}
            data={threads}
            ListFooterComponent={() => {
              return <View style={styles.footerStyles} />;
            }}
            renderItem={({item}) => {
              return (
                <MyRatingMovieCard
                  data={item}
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

export default WatchList;
