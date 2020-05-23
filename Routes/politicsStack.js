import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Header from '../Components/Header'
import React from 'react'
import PoliticsCard from '../Components/PoliticsCard.js'

const screens = {
  Politics: {
    screen: PoliticsCard,
    navigationOptions: {
      headerStyle: {
        elevation: 10,
      },
    },
  },
}

const PoliticsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitle: () => <Header />,
  },
})

export default PoliticsStack
