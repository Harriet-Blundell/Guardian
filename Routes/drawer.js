import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from './homeStack'
import PoliticsStack from './politicsStack'

const RootDrawNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Politics: {
    screen: PoliticsStack,
  },
})

export default createAppContainer(RootDrawNavigator)
