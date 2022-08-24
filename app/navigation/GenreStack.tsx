import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Strings } from '../constants';
import GenreMovies from '../modules/genreMovies/GenreMovies';
import GenreScreen from '../modules/genres/GenreScreen';
import DetailScreen from '../modules/movieDetails/DetailScreen';

const Stack = createNativeStackNavigator();

const GenreStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Strings.genreListScreen} component={GenreScreen} />
      <Stack.Screen name={Strings.genreMovies} component={GenreMovies} />
      <Stack.Screen name={Strings.detailScreen} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default GenreStack;
