import React from 'react'
import { View } from 'react-native'
import SearchInput from './SearchInput.js'
import ArticleList from './ArticleList'

const MainContent = () => {
  return (
    <View>
      <SearchInput />
      <ArticleList />
    </View>
  )
}

export default MainContent
