import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets,createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home';
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail';

export default function HomeNavigation() {
    const isAndroid=true;
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        gestureEnabled:true,
        headerShown:false
    }} >
      <Stack.Screen name='home' component={Home}/>
      <Stack.Screen name='place-detail' component={PlaceDetail} screenOptions={{presentation:'modal'}} />
    </Stack.Navigator>
  )
}