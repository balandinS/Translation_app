import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Touchble = ({children, onPress}) => {
 

  return <TouchableOpacity styles={styles.touchContainer} onPress={onPress}>{children}</TouchableOpacity>;
};

export default Touchble;

const styles = StyleSheet.create({
    touchContainer: {
        borderRadius: 10,
    }
});
