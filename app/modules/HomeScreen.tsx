import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {orderCake} from '../features/cake/cakeSlice';
import {orderCookie} from '../features/cookies/cookieSlice';
import {fetchUsers} from '../features/users/userSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const dataLoading = useSelector(state => state.users.loading);
  const allUsers = useSelector(state => state?.users?.users);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="get Data"
        onPress={() => {
          dispatch(fetchUsers());
        }}
      />
      <Button title="cancel" onPress={() => {}} />
      {dataLoading ? <ActivityIndicator /> : <Text>{allUsers}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
