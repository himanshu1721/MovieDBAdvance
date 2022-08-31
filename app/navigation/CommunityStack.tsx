import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Strings } from '../constants';
import ChatScreen from '../modules/chatScreen/ChatScreen';
import Community from '../modules/community/Community';
import OtherProfile from '../modules/otherProfile/OtherProfile';

const Stack = createNativeStackNavigator();

function CommunityStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Strings.communityScreen} component={Community} />
      <Stack.Screen name={Strings.otherProfile} component={OtherProfile} />
      <Stack.Screen name={Strings.chatScreen} component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default CommunityStack;
