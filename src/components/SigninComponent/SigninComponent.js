import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormComponent from '../FormComponent/FormComponent';
import InputComponent from '../UI/InputComponent';
const SigninComponent = () => {
  const handleEmailInput = (text) => {};
  const handlePasswordInput = (text) => {};
  return (
    <View style={styles.container}>
      <FormComponent>
        <View>
          <InputComponent label={'Email'} handleTextChange={handleEmailInput} />
          <InputComponent
            label={'Password'}
            handleTextChange={handlePasswordInput}
          />
        </View>
      </FormComponent>
    </View>
  );
};

export default SigninComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
