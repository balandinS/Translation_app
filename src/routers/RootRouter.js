import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
const RootStack = createStackNavigator();

export default () => {
  const options = {
    loginOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#0274BC',
        shadowColor: 'transparent',
        elevation:0 
      },
    },
  };
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="LoginScreen">
        <RootStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={options.loginOptions}
        />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
