import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../Images/the-guardian-logo.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: 200,
    borderRadius: 50,
    marginLeft: 80,
  },
})

export default Header
