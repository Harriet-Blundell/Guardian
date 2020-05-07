import React from 'react'
import * as api from './api'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import ArticleCard from './Components/ArticleCard.js'
import Header from './Components/Header.js'
import Pagination from './Components/Pagination.js'
import Subscribe from './Components/Subscribe.js'

export default class App extends React.Component {
  state = {
    newestArticles: [],
    currentPage: 1,
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
        const { results, currentPage } = data.response
        this.setState({
          newestArticles: results,
          currentPage: currentPage,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log(err, 'err is here')
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
          const { results, currentPage } = data.response

          this.setState({
            newestArticles: results,
            currentPage: currentPage,
            isLoading: false,
          })
        })
    }
  }

  handlePageClick(number) {
    this.setState({
      currentPage: this.state.currentPage + number,
    })
  }

  render() {
    const { isLoading, newestArticles, currentPage } = this.state

    return (
      <View style={styles.container}>
        {isLoading && <Text>Loading...</Text>}

        <Header />
        <ScrollView>
          <Text style={styles.mostRecent}>Most Recent</Text>
          <View>
            <FlatList
              data={newestArticles}
              renderItem={({ item }) => {
                return <ArticleCard articleInfo={item} />
              }}
            />
          </View>
          <Subscribe />
          <Pagination
            handlePageClick={this.handlePageClick.bind(this)}
            currentPage={currentPage}
          />
        </ScrollView>
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

  mostRecent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#191970',
  },
})
