import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import TopRated from '../modules/topRated/TopRated';
import WatchList from '../modules/watchlist/WatchList';
import { Colors, moderateScale, verticalScale } from '../themes';
import HomeStack from './StackNavigation';
import Icons from '../assets/images';
import ProfileScreen from '../modules/profileScreen/Profile';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: {
          height: verticalScale(60),
          paddingTop: verticalScale(5),
          backgroundColor: Colors.prussianBlue,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={!focused ? Icons.home : Icons.homeLime}
              style={{ width: moderateScale(30), height: moderateScale(30) }}
            />
          ),
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ width: moderateScale(32), height: moderateScale(32) }}
              source={focused ? Icons.topRatedLime : Icons.topRated}
            />
          ),
        }}
        name="TopRated"
        component={TopRated}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ width: moderateScale(30), height: moderateScale(30) }}
              source={focused ? Icons.saveLime : Icons.saveFilled}
            />
          ),
        }}
        name="WatchList"
        component={WatchList}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ width: moderateScale(30), height: moderateScale(30) }}
              source={focused ? Icons.profileLime : Icons.profile}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
