import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SigninComponent from '../components/SigninComponent/SigninComponent';

const LoginScreen = () => {
  return (
    <View style={styles.contianer}>
      <View style={styles.conatinerTitle}>
        <Text style={styles.title}>Let’s Sign You In</Text>
        <Text style={styles.subTitle}>Welcome back, you’ve been missed!</Text>
      </View>
      <View style={styles.contianerSignin}>
        <SigninComponent />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0274BC',
    paddingHorizontal: 10,
  },
  conatinerTitle: {
    flex: 2,
    justifyContent: "center"
  },
  contianerSignin: {
     flex: 3
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 28,
  },
  subTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 19,
    marginBottom: 20,
  },
});
