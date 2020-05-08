import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Header from './Components/Header.js'
// import SubscribeInput from './Components/SubscribeInput.js'
// import SearchInput from './Components/SearchInput.js'
// import ArticleList from './Components/ArticleList.js'
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
