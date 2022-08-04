import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import DrawerRoutes from './DrawerRoutes';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const user = useSelector(state => state?.auth?.user);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user === false ? (
          <Stack.Screen name={'AuthStack'} component={AuthStack} />
        ) : (
          <Stack.Screen name={'DrawerRoutes'} component={DrawerRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
