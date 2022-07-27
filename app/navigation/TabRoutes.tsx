import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import TopRated from '../modules/topRated/TopRated';
import {Colors} from '../themes';
import HomeStack from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.prussianBlue,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen name="Top Rated" component={TopRated} />
    </Tab.Navigator>
  );
}
