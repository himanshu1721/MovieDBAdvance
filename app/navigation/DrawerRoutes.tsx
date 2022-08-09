import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect, useRef, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import CustomDrawer from '../components/CustomDrawer';
import Community from '../modules/community/Community';
import RatedByMe from '../modules/ratedByMe/RatedByMe';
import WatchList from '../modules/watchlist/WatchList';
import { Colors, moderateScale } from '../themes';
import CommunityStack from './CommunityStack';
import TabRoutes from './TabRoutes';
import { AppState } from 'react-native';
import { useCurrentUserDetails } from '../hooks/useCurrentUID';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  const { currentUserUID, currentEmailID } = useCurrentUserDetails();

  const [aState, setAppState] = useState(AppState.currentState);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

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
        console.log('App has come to the foreground!');
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
        console.log('App not active');
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
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
        name="CommunityStack"
        component={CommunityStack}
      />
    </Drawer.Navigator>
  );
};
export default DrawerRoutes;
