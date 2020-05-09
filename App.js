import React from 'react'
import { StyleSheet } from 'react-native'
import Navigator from './Routes/homeStack.js'

const App = () => {
  return <Navigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
