import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const Header = () => {
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
    height: 110,
    width: 400,
    marginTop: 10,
    marginBottom: 10,
  },
})

export default Header
