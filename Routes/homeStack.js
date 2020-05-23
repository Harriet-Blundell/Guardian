import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Components/Home'
import SingleArticle from '../Components/SingleArticle'
import ArticleList from '../Components/ArticleList'
import Header from '../Components/Header'
import React from 'react'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      }
    },
  },
  SingleArticle: {
    screen: SingleArticle,
    navigationOptions: {
      headerTitle: '',
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
      headerTitle: () => <Header />,
      headerStyle: {
        elevation: 10,
      },
      headerTitleContainerStyle: {
        left: 25,
      },
    },
  },
}

const HomeStack = createStackNavigator(screens, {})

export default HomeStack
