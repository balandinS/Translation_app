import React from 'react'
import { StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default () => {
Icon.loadFont()
return <Icon name="user" size={30} color="#7f8c8d"/>
}

const styles = StyleSheet.create({})
