//import liraries
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import HeaderTitle from '../../components/HeaderTitle';
import {moderateScale} from '../../themes';
import CustomHeader from '../movieDetails/components/Header';
import EmptyWatchList from './components/EmptyWatchList';
import ItemSeparatorMyRatings from './components/ItemSeparator';
import MyRatingMovieCard from './components/MyRatingMovieCard';
import styles from './styles/RatedByMeStyles';

const RatedByMe = ({navigation}) => {
  const currentUserUID = useSelector(state => state.auth.userUID);
  const [threads, setThreads] = useState([]);

  const getUsers = async () => {
    const querySnap = await firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .collection('myRatings')
      .get();
    const allusers = querySnap.docs.map(docSnap => docSnap.data());
    setThreads(allusers);
  };

  useEffect(() => {
    getUsers();
  }, [threads]);

  const renderItem = ({item}) => (
    <MyRatingMovieCard
      rating={item?.rating}
      data={item?.item}
      onTap={() =>
        navigation.navigate('Detail', {
          type: 'movie',
          id: item?.item?.id,
        })
      }
    />
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          renderMiddle={<HeaderTitle title={'My Ratings'} />}
          renderIcon={
            <DrawerIconComponent onTap={() => navigation.openDrawer()} />
          }
          backButton={false}
        />
        <View style={styles.subContainer}>
          <FlatList
            ListFooterComponent={() => (
              <View style={{height: moderateScale(100)}}></View>
            )}
            initialNumToRender={4}
            ListEmptyComponent={<EmptyWatchList />}
            keyExtractor={item => item?.item?.id}
            ItemSeparatorComponent={() => <ItemSeparatorMyRatings />}
            showsVerticalScrollIndicator={false}
            maxToRenderPerBatch={4}
            data={threads}
            renderItem={renderItem}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RatedByMe;
