import React, { Component } from 'react'
import { View, Text } from 'react-native'
import * as api from '../api.js'

class SingleArticle extends Component {
  state = {
    singleArticle: [],
    isLoading: true,
  }

  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam('apiUrl')}</Text>
      </View>
    )
  }
}

export default SingleArticle
