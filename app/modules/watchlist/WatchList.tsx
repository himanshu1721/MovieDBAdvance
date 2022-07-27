//import liraries
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import MovieList from '../HomeScreen/components/MovieList';
import CustomHeader from '../movieDetails/components/Header';
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
    console.log('all movies', allusers);
    setThreads(allusers);
  };

  useEffect(() => {
    getUsers();
  }, [threads]);

  const watchLater = useSelector(state => state.watchLater.watchLater);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <CustomHeader
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
        <View style={{padding: 10}}>
          <MovieList data={threads} />
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
