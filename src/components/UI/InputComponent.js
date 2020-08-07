import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const InputComponent = ({label , handleTextChange}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput onChange={text => handleTextChange(text)} placeholder={label}/>
        </View>
    )
}

export default InputComponent

const styles = StyleSheet.create({})
