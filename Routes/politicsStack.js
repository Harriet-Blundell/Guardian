import { createStackNavigator } from 'react-navigation-stack'
import Header from '../Components/Header'
import React from 'react'
import PoliticsCard from '../Components/PoliticsCard.js'

const screens = {
  Politics: {
    screen: PoliticsCard,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Politics' />,
      }
    },
  },
}

const PoliticsStack = createStackNavigator(screens, {})

export default PoliticsStack
