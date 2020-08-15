import React from 'react'
import { StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default ({name, size, color}) => {
Icon.loadFont()
return <Icon name={name} size={size} color={color}/>
}

const styles = StyleSheet.create({})
