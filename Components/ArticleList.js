import React, { Component } from 'react'
import * as api from '../api'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import ArticleCard from './ArticleCard.js'
import Pagination from './Pagination.js'

class ArticleList extends Component {
  state = {
    newestArticles: [],
    currentPage: 1,
    totalPages: 0,
    isLoading: true,
    error: null,
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
      .catch((err) => {
        console.log(err)
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

  handlePageClick(number) {
    this.setState({
      currentPage: this.state.currentPage + number,
      isLoading: true,
    })
    this.refs.flatListRef.scrollToOffset({ animated: true, offset: 0 })
  }

  render() {
    const { isLoading, newestArticles, currentPage, totalPages } = this.state

    return (
      <View style={styles.container}>
        {isLoading && <Text>Loading...</Text>}

        <FlatList
          ref={'flatListRef'}
          ListHeaderComponent={
            <Text style={styles.mostRecentText}>Most Recent</Text>
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
            <Pagination
              handlePageClick={this.handlePageClick.bind(this)}
              currentPage={currentPage}
              totalPages={totalPages}
            />
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
