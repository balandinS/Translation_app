import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavigatorApp from './routers/RootRouter'
const App = () => {
  return (
    <NavigatorApp>
      <Text>Hello</Text>
    </NavigatorApp>
  )
}

export default App

const styles = StyleSheet.create({})
