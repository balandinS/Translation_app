import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormComponent from '../FormComponent/FormComponent';
import InputComponent from '../UI/InputComponent';
import Button from '../UI/ButtonComponents'
import { COLORS } from '../../constans/Constans'

const SigninComponent = () => {
  const handleEmailInput = (text) => {};
  const handlePasswordInput = (text) => {};
  return (
    <View style={styles.container}>
      <FormComponent>
        <View>
          <InputComponent label={'Email'} handleTextChange={handleEmailInput} typeField="emailAddress"/>
          <InputComponent
            label={'Password'}
            handleTextChange={handlePasswordInput}
          />
          <Button backgroundColor={COLORS.orange}><Text>Sign In</Text></Button>
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
