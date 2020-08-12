import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessagesScreen from '../screens/MessagesScreen';
import BookedMessagesScreen from '../screens/BookedMessagesScreen';
import HomeScreen from '../screens/HomeScreen'
const Tab = createBottomTabNavigator();

const MessageRouterBottomTab = () => {
    return (
        <Tab.Navigator initialRouteName="Messages">
            <Tab.Screen name="Messages" component={MessagesScreen}/>
            <Tab.Screen name="BookedMessages" component={BookedMessagesScreen}/>
        </Tab.Navigator>
    )
}

export default MessageRouterBottomTab

const styles = StyleSheet.create({})
