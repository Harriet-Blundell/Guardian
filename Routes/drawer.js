import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from './homeStack'
import SectionStack from './sectionStack.js'

const RootDrawNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Topics: {
    screen: SectionStack,
  },
})

export default createAppContainer(RootDrawNavigator)
