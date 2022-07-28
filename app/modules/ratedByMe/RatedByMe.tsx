//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../movieDetails/components/Header';
import {Colors} from '../../themes';
import MovieBrief from '../../components/MovieBrief';
import MyRatingMovieCard from './components/MyRatingMovieCard';
import HeaderTitle from '../../components/HeaderTitle';
import DrawerIconComponent from '../../components/DrawerIconComponent';

// create a component
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

  const EmptyWatchList = () => {
    return (
      <View style={{marginTop: 200}}>
        <Text
          style={{fontSize: 25, fontWeight: '500', color: Colors.limeGreen}}>
          WatchList is Empty!
        </Text>
      </View>
    );
  };

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

  const ItemSeparator = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          height: 50,
        }}>
        <View
          style={{
            alignSelf: 'center',
            width: '40%',
            height: 3,
            opacity: 0.5,
            borderRadius: 5 / 2,
            backgroundColor: '#696969',
          }}></View>
      </View>
    );
  };

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
            initialNumToRender={4}
            ListEmptyComponent={<EmptyWatchList />}
            keyExtractor={item => item?.item?.id}
            ItemSeparatorComponent={() => <ItemSeparator />}
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

const styles = StyleSheet.create({
  container: {backgroundColor: '#181725', flex: 1},
  subContainer: {
    padding: 10,
    backgroundColor: '#061422',
    alignItems: 'center',
  },
});

export default RatedByMe;
