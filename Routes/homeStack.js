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
    navigationOptions: {
      headerStyle: {
        elevation: 10,
      },
    },
  },
  SingleArticle: {
    screen: SingleArticle,
    navigationOptions: {
      headerStyle: {
        elevation: 10,
      },
      headerTitleContainerStyle: {
        left: 25,
      },
    },
  },
  ArticleList: {
    screen: ArticleList,
    navigationOptions: {
      headerStyle: {
        elevation: 10,
      },
      headerTitleContainerStyle: {
        left: 25,
      },
    },
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitle: (props) => <Header {...props} />,
  },
})

export default createAppContainer(HomeStack)
