import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/CustomDrawer';
import RatedByMe from '../modules/ratedByMe/RatedByMe';
import WatchList from '../modules/watchlist/WatchList';
import {Colors, moderateScale} from '../themes';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        swipeEdgeWidth: 0,
        drawerLabelStyle: {
          color: Colors.white,
        },
        drawerStyle: {
          flex: 1,
          backgroundColor: Colors.darkBlue,
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        options={{
          drawerLabelStyle: {
            fontWeight: '500',
            letterSpacing: 0.2,
            fontSize: moderateScale(15),
            color: 'white',
          },
        }}
        name="Home"
        component={TabRoutes}
      />
      <Drawer.Screen
        options={{
          drawerLabelStyle: {
            fontWeight: '500',
            letterSpacing: 0.2,
            fontSize: moderateScale(15),
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
