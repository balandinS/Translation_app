import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import { COLORS } from '../../constans/Constans'
import Icon from './IconComponent'
const InputComponent = ({label, handleTextChange, typeField = 'none', icon}) => {
  const [isFocused, setIsFocus] = useState(false);

  const handleFocusInput = () => {
    setIsFocus((prev) => !prev); // change border bottom color if user tap on feild
  };
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.containerInput}>
        <Icon name={icon} size={30} color={COLORS.defualt}/>
        <TextInput
          textContentType={typeField}
          onBlur={handleFocusInput}
          onFocus={handleFocusInput}
          style={{
            ...styles.text,
            ...styles.input,
            borderBottomColor: !isFocused ? '#000' : COLORS.defualt,
          }}
          onChange={(text) => handleTextChange(text)}
        />
      </View>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputGroup: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  containerInput: {
    flexDirection: "row"
  },
  input: {
    borderBottomWidth: 1,
    flex: 1
  },
  text: {
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
    margin: 1,
    paddingVertical: 2,
    paddingHorizontal: 2,
    color: '#7f8c8d',
  },
});
