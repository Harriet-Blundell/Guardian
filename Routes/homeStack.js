import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../Components/Home'
import SingleArticle from '../Components/SingleArticle'
import ArticleList from '../Components/ArticleList'
import Header from '../Components/Header'
import React from 'react'

const screens = {
  Home: {
    screen: Home,
  },
  SingleArticle: {
    screen: SingleArticle,
  },
  ArticleList: {
    screen: ArticleList,
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitle: () => <Header />,
  },
})

export default createAppContainer(HomeStack)
