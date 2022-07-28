//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

// create a component
const RatedByMe = () => {
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

  //TODO: Create UI for this
  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        renderItem={({item}) => {
          return <Text>{item?.item?.original_title}</Text>;
        }}
      />
    </View>
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
export default RatedByMe;
