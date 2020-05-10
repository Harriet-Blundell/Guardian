import React, { Component } from 'react'
import * as api from '../api'
import {
  StyleSheet,
  ActivityIndicator,
  View,
  FlatList,
  Text,
} from 'react-native'
import ArticleCard from './ArticleCard.js'
import SubscribeInput from './SubscribeInput.js'
import SearchInput from './SearchInput.js'

class ArticleList extends Component {
  state = {
    newestArticles: [],
    isLoading: true,
  }

  componentDidMount() {
    api
      .fetchArticles({
        page: 1,
        'order-by': 'newest',
        'page-size': 5,
        'show-fields': 'thumbnail',
      })
      .then(({ data }) => {
        const { results, pages } = data.response
        this.setState({
          newestArticles: results,
          totalPages: pages,
          isLoading: false,
        })
      })
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      api
        .fetchArticles({
          page: this.state.currentPage,
          'show-fields': 'thumbnail',
          'page-size': 5,
          'order-by': 'newest',
        })
        .then(({ data }) => {
          const { results } = data.response
          this.setState({
            newestArticles: results,
            isLoading: false,
          })
        })
    }
  }

  render() {
    const { isLoading, newestArticles } = this.state

    return (
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size='large' color='#4682B4' />}
        <FlatList
          ref={'flatListRef'}
          ListHeaderComponent={
            <>
              <SearchInput navigation={this.props.navigation} />
              <Text style={styles.mostRecentText}>Latest News</Text>
            </>
          }
          data={newestArticles}
          renderItem={({ item }) => {
            return (
              <ArticleCard
                articleInfo={item}
                navigation={this.props.navigation}
              />
            )
          }}
          ListFooterComponent={
            <>
              <SubscribeInput />
            </>
          }
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

  mostRecentText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#191970',
    paddingLeft: 20,
  },
})

export default ArticleList
