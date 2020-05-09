import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ArticleList from '../Components/ArticleList'
import SingleArticle from '../Components/SingleArticle'
import Header from '../Components/Header'
import React from 'react'

const screens = {
  Home: {
    screen: ArticleList,
  },
  SingleArticle: {
    screen: SingleArticle,
    navigationOptions: {
      headerLeft: null,
    },
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitle: () => <Header />,
  },
})

export default createAppContainer(HomeStack)
