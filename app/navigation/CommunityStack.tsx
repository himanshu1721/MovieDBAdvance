import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Community from '../modules/community/Community';

import OtherProfile from '../modules/otherProfile/OtherProfile';

const Stack = createNativeStackNavigator();

function CommunityStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="OtherProfile" component={OtherProfile} />
    </Stack.Navigator>
  );
}

export default CommunityStack;
