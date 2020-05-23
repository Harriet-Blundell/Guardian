import { createStackNavigator } from 'react-navigation-stack'
import Header from '../Components/Header'
import React from 'react'
import SectionList from '../Components/SectionList.js'

const screens = {
  Politics: {
    screen: SectionList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Politics' />,
      }
    },
  },
}

const PoliticsStack = createStackNavigator(screens, {})

export default PoliticsStack
