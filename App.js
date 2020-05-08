import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Header from './Components/Header.js'
import SubscribeInput from './Components/SubscribeInput.js'
import MainContent from './Components/MainContent.js'

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <MainContent />
        <SubscribeInput />
      </ScrollView>
    </View>
  )
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
