import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Strings } from '../constants';
import PeopleList from '../modules/peopleList/PeopleList';

const Stack = createNativeStackNavigator();

const PeopleStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Strings.peopleListScreen} component={PeopleList} />
    </Stack.Navigator>
  );
};

export default PeopleStack;
