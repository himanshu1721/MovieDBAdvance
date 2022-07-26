import firestore from '@react-native-firebase/firestore';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import CustomDrawer from '../components/CustomDrawer';
import { useCurrentUserDetails } from '../hooks/useCurrentUID';
import RatedByMe from '../modules/ratedByMe/RatedByMe';
import { Colors, moderateScale } from '../themes';
import CommunityStack from './CommunityStack';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  const { currentUserUID } = useCurrentUserDetails();

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        firestore()
          .collection('users')
          .doc(`${currentUserUID}`)
          .update({ isOnline: true });
      } else {
        firestore()
          .collection('users')
          .doc(`${currentUserUID}`)
          .update({ isOnline: false });
        firestore()
          .collection('users')
          .doc(`${currentUserUID}`)
          .update({
            lastSeen: new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          });
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .update({ isOnline: true });

    return () => {
      firestore()
        .collection('users')
        .doc(`${currentUserUID}`)
        .update({ isOnline: false });
      firestore()
        .collection('users')
        .doc(`${currentUserUID}`)
        .update({
          lastSeen: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        });
    };
  }, []);

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
      <Drawer.Screen
        options={{
          drawerLabelStyle: {
            fontWeight: '500',
            letterSpacing: 0.2,
            fontSize: moderateScale(15),
            color: 'white',
          },
        }}
        name="Community"
        component={CommunityStack}
      />
    </Drawer.Navigator>
  );
};
export default DrawerRoutes;
