import React from 'react'
import * as api from './api'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ArticleCard from './Components/ArticleCard.js'
import Header from './Components/Header'

export default class App extends React.Component {
  state = {
    articles: [],
    isLoading: true,
  }

  componentDidMount() {
    api.fetchArticles({ orderBy: 'newest' }).then(({ data }) => {
      this.setState({
        articles: data.response.results,
        isLoading: false,
      })
    })
  }

  render() {
    const { isLoading, articles } = this.state

    return (
      <View style={styles.container}>
        {isLoading && <Text>Loading...</Text>}

        <Header />

        <FlatList
          data={articles}
          renderItem={({ item }) => {
            return <ArticleCard articleInfo={item} />
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
