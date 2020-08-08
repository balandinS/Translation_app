import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import {COLORS} from '../../constans/Constans';
import Touchble from '../UI/TouchbleCard';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const TouchbleCard = () => {
  return (
    <Touchble>
      <View style={styles.imageContianer}>
        <ImageBackground
          style={styles.imageContianer}
          source={{
            uri:
              'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          }}>
          <Text style={styles.about}>About</Text>
          <Text style={styles.title}>SMS translation</Text>
          <Text style={styles.description}>
            Hello User in this app you can translate your SMS, touch for learn
            more...
          </Text>
        </ImageBackground>
      </View>
    </Touchble>
  );
};

export default TouchbleCard;

const styles = StyleSheet.create({
  imageContianer: {
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
  },
  about: {
    fontFamily: 'Roboto-Bold',
    color: COLORS.defualt,
    fontSize: 16,
    padding: 5
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: COLORS.white,
    fontSize: 22,
    padding: 5
  },
  description: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.white,
    fontSize: 18,
    padding: 5
  },
});
