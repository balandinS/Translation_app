import React from 'react';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {COLORS} from '../../constans/Constans';

const ButtonComponents = ({
  onPress,
  backgroundColor = COLORS.defualt,
  children,
}) => {
  //if OS android app will use TouchableNativeFeedback Component
  if (Platform.OS === 'android')
    return (
      <TouchableNativeFeedback  onPress={onPress}>
        <View style={{...styles.touchable, backgroundColor}}>{children}</View>
      </TouchableNativeFeedback>
    );

  return (
    <TouchableOpacity style={{...styles.touchable, backgroundColor}} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonComponents;

const styles = StyleSheet.create({
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    color: "#fff",
    borderRadius: 10
  },
});
