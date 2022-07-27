import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import WatchList from '../modules/watchlist/WatchList';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={TabRoutes} />
      <Drawer.Screen name="Watchlist" component={WatchList} />
    </Drawer.Navigator>
  );
};
export default DrawerRoutes;
