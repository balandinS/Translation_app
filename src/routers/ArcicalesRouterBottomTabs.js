import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MessagesScreen from '../screens/MessagesScreen';
import BookedMessagesScreen from '../screens/BookedMessagesScreen';
import {COLORS} from '../constans/Constans';
import Icon from '../components/UI/IconComponent';

const Tab = createBottomTabNavigator();
const TabMaterial = createMaterialBottomTabNavigator();
const ArcicalesRouterBottomTabs = () => {
  const TabMaterialStyle = {
    backgroundColor: COLORS.black,
  };
  if (Platform.OS === 'android') {
    return (
      <TabMaterial.Navigator
        activeColor="whitesmoke"
        barStyle={TabMaterialStyle}>
        <TabMaterial.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="list" size={21} color={color} />
            ),
          }}
        />
        <TabMaterial.Screen
          name="BookedMessages"
          component={BookedMessagesScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="star" size={21} color={color} />
            ),
          }}
        />
      </TabMaterial.Navigator>
    );
  }
  return (
    <Tab.Navigator initialRouteName="Messages">
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="list" size={21} color={color} />,
        }}
      />
      <Tab.Screen
        name="BookedMessages"
        component={BookedMessagesScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="star" size={21} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default ArcicalesRouterBottomTabs;
