import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/CustomDrawer';
import RatedByMe from '../modules/ratedByMe/RatedByMe';
import WatchList from '../modules/watchlist/WatchList';
import {Colors} from '../themes';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          color: Colors.white,
        },
        drawerStyle: {
          backgroundColor: Colors.darkBlue,
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        options={{
          drawerLabelStyle: {
            fontWeight: '600',
            letterSpacing: 0.2,
            fontSize: 16,
            color: 'white',
          },
        }}
        name="Home"
        component={TabRoutes}
      />
      <Drawer.Screen
        options={{
          drawerLabelStyle: {
            fontWeight: '600',
            letterSpacing: 0.2,
            fontSize: 16,
            color: 'white',
          },
        }}
        name="Watchlist"
        component={WatchList}
      />
      <Drawer.Screen
        options={{
          drawerLabelStyle: {
            fontWeight: '600',
            letterSpacing: 0.2,
            fontSize: 16,
            color: 'white',
          },
        }}
        name="Rated By Me"
        component={RatedByMe}
      />
    </Drawer.Navigator>
  );
};
export default DrawerRoutes;
