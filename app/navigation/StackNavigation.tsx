import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../modules/HomeScreen/HomeScreen';
import DetailScreen from '../modules/movieDetails/DetailScreen';
import TopRated from '../modules/topRated/TopRated';
import WatchList from '../modules/watchlist/WatchList';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="TopRated" component={TopRated} />
      <Stack.Screen name="Watchlist" component={WatchList} />
    </Stack.Navigator>
  );
}

export default Routes;
