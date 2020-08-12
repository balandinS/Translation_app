import React from 'react';
import {Platform} from 'react-native';
import { COLORS} from '../constans/Constans'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MessageRouterBottomTab from './MessageRouterBottomTab'
const RootStack = createStackNavigator();

export default () => {
   const LoginScreenOptions = {
      title: '',
      headerStyle: {
        backgroundColor: COLORS.defualt,
        shadowColor: 'transparent',
        elevation:0,
      },
      headerTitle: 'welcome'
   };
   const HomeScreenOptions = {
    title: 'back',
    headerTitle: 'Main'
   };
   const MessagesScreen = {
    title: 'Masseges'
   };
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="LoginScreen" >
        <RootStack.Screen name="LoginScreen" component={LoginScreen} options={LoginScreenOptions}/>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} options={HomeScreenOptions}/>
        <RootStack.Screen name="MessagesScreen" component={MessageRouterBottomTab} options={MessagesScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
