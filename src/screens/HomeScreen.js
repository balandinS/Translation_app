import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {COLORS} from '../constans/Constans';
import CardComponent from '../components/CardComponents/CardComponent';
const LoginScreen = () => {
  return (
    <View style={styles.containerScreen}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>translate app</Text>
      </View>
      <ScrollView >
        <CardComponent
          title="SMS transetion"
          description="Hello User in this app you can translate your SMS, touch for learn
            more..."
          route="MessagesScreen"
        />
        <CardComponent
          title="React Native Articlase"
          description="User can read lastes post about React Native Posts"
          route="ArticaleScreen"
        />
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  containerTitle: {
    flex: 0.33,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 21,
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: COLORS.defualt,
  },
});
