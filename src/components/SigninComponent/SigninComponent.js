import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormComponent from '../FormComponent/FormComponent';
import { useNavigation } from '@react-navigation/native'
import InputComponent from '../UI/InputComponent';
import Button from '../UI/ButtonComponents';
import {COLORS} from '../../constans/Constans';
import navigator from '../../routers/utilsRoute'
import { Colors } from 'react-native/Libraries/NewAppScreen';
const SigninComponent = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigator('HomeScreen', {}, navigation);
  };
  const handleEmailInput = (text) => {};
  const handlePasswordInput = (text) => {};
  return (
    <View style={styles.container}>
      <FormComponent>
        <View>
          <InputComponent
            label={'Email'}
            icon='user'
            handleTextChange={handleEmailInput}
            typeField="emailAddress"
          />
          <InputComponent
            label={'Password'}
            icon='unlock'
            handleTextChange={handlePasswordInput}
          />
          <Button backgroundColor={COLORS.black} onPress={handleNavigation}>
            <Text style={{color: COLORS.white}}>Sign In</Text>
          </Button>
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
