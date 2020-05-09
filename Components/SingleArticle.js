import React, { Component } from 'react'
import { View, Text, ScrollView, Button, StyleSheet, Image } from 'react-native'
import * as api from '../api.js'
import { formatDate } from '../utils.js'

class SingleArticle extends Component {
  state = {
    singleArticle: [],
    isLoading: true,
  }

  componentDidMount() {
    const ArticleId = this.props.navigation.getParam('id')

    api
      .fetchSingleArticle(ArticleId, { 'show-fields': 'bodyText,thumbnail' })
      .then(({ data }) => {
        const { content } = data.response
        this.setState({
          singleArticle: content,
          isLoading: false,
        })
      })
  }

  render() {
    const { singleArticle, isLoading } = this.state

    {
      !isLoading && console.log(singleArticle.fields)
    }

    return <View></View>
  }
}

const styles = StyleSheet.create({
  singleArticleTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  singleArticleImage: {
    width: '100%',
    height: 260,
    alignSelf: 'center',
    marginBottom: 15,
  },

  singleArticleDate: {
    marginLeft: 20,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  singleArticleSection: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 17,
    color: '#4682B4',
    fontWeight: 'bold',
  },

  singleArticleBodyText: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
})

export default SingleArticle
