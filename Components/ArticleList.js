import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import * as api from '../api.js'
import ArticleCard from './ArticleCard.js'
import Pagination from '../Components/Pagination.js'

class ArticleList extends Component {
  state = {
    articles: [],
    currentPage: 1,
    totalPages: 0,
    totalArticles: '',
    isLoading: true,
  }

  componentDidMount() {
    const searchTerm = this.props.navigation.getParam('searchTerm')

    api
      .fetchArticles({
        q: searchTerm,
        'page-size': 5,
        'show-fields': 'thumbnail',
      })
      .then(({ data }) => {
        this.setState({
          articles: data.response.results,
          totalArticles: data.response.total,
          totalPages: data.response.pages,
          isLoading: false,
        })
      })
  }

  componentDidUpdate(prevProp, prevState) {
    const searchTerm = this.props.navigation.getParam('searchTerm')

    if (prevState.currentPage !== this.state.currentPage) {
      api
        .fetchArticles({
          page: this.state.currentPage,
          q: searchTerm,
          'page-size': 5,
          'show-fields': 'thumbnail',
        })
        .then(({ data }) => {
          this.setState({
            articles: data.response.results,
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
    const {
      articles,
      totalArticles,
      currentPage,
      totalPages,
      isLoading,
    } = this.state

    const searchTerm = this.props.navigation.getParam('searchTerm')

    return (
      <View>
        {isLoading && <Text>Loading articles...</Text>}
        <FlatList
          ref={'flatListRef'}
          ListHeaderComponent={
            <>
              <Text>
                {totalArticles} results for "{searchTerm}"
              </Text>
            </>
          }
          data={articles}
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
              <Pagination
                handlePageClick={this.handlePageClick.bind(this)}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </>
          }
        />
      </View>
    )
  }
}

export default ArticleList
