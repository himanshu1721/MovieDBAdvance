import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../modules/loginScreen/LoginScreen';
import PhoneNumberScreen from '../modules/phoneNumber/PhoneNumberScreen';
import { Strings } from '../constants';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Strings.loginScreen} component={LoginScreen} />
      <Stack.Screen
        name={Strings.phoneNumberScreen}
        component={PhoneNumberScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
