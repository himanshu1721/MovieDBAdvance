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
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: {
          backgroundColor: Colors.prussianBlue,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                !focused
                  ? require('../assets/images/home.png')
                  : require('../assets/images/homeLime.png')
              }
              style={{width: 30, height: 30}}
            />
          ),
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{width: 32, height: 32}}
              source={
                focused
                  ? require('../assets/images/topRatedLime.png')
                  : require('../assets/images/topRated.png')
              }
            />
          ),
        }}
        name="TopRated"
        component={TopRated}
      />
    </Tab.Navigator>
  );
}
