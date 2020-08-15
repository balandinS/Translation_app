import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constans/Constans';
import Touchble from '../UI/TouchbleCard';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const TouchbleCard = ({title, description, route}) => {
  const navigation = useNavigation();
  return (
    <Touchble onPress={() => navigation.navigate(route)}>
      <View style={styles.imageContianer}>
        <ImageBackground
          style={styles.imageContianer}
          source={{
            uri:
              'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          }}>
          <Text style={styles.about}>About</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
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
    flex: .95
    
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
  },
  about: {
    fontFamily: 'Roboto-Bold',
    color: COLORS.defualt,
    fontSize: 16,
    padding: 5,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: COLORS.white,
    fontSize: 22,
    padding: 5,
  },
  description: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.white,
    fontSize: 18,
    padding: 5,
  },
});
