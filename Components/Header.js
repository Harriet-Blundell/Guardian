import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      <MaterialIcons
        name='menu'
        size={35}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../Images/the-guardian-logo.jpg')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: 200,
    borderRadius: 50,
    marginLeft: 60,
  },
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    left: 10,
    marginTop: 5,
  },
})

export default Header
