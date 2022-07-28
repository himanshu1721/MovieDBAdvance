//import liraries
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import MovieBrief from '../../components/MovieBrief';
import AppConstants from '../../constants/AppConstants';
import {Colors} from '../../themes';
import MovieList from '../HomeScreen/components/MovieList';
import CustomHeader from '../movieDetails/components/Header';
import MyRatingMovieCard from '../ratedByMe/components/MyRatingMovieCard';
// create a component
const WatchList = ({navigation}) => {
  const currentUserUID = useSelector(state => state.auth.userUID);
  // const watchList = useSelector(state => state.watchLater.watchLater);

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

  const watchLater = useSelector(state => state.watchLater.watchLater);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor: '#061422', flex: 1}}>
        <CustomHeader
          renderMiddle={
            <Text
              style={{
                fontSize: 30,
                fontWeight: '700',
                color: Colors.limeGreen,
              }}>
              WatchList
            </Text>
          }
          renderIcon={
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{height: 35, width: 35}}
                source={require('../../assets/images/drawer.png')}
              />
            </TouchableOpacity>
          }
          backButton={false}
        />
        <View
          style={{
            padding: 10,
            backgroundColor: '#061422',
            alignItems: 'center',
          }}>
          <FlatList
            ListEmptyComponent={<EmptyWatchList />}
            ItemSeparatorComponent={() => (
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
            )}
            showsVerticalScrollIndicator={false}
            maxToRenderPerBatch={3}
            data={threads}
            ListFooterComponent={() => {
              return <View style={{height: 100}}></View>;
            }}
            renderItem={({item}) => {
              return (
                <MyRatingMovieCard
                  // rating={item?.rating}
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
export default WatchList;
