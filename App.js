import React from 'react'
import * as api from './api'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import ArticleCard from './Components/ArticleCard.js'
import Header from './Components/Header.js'
import ArticlesBySection from './Components/ArticlesBySection'

export default class App extends React.Component {
  state = {
    newestArticles: [],
    articles: [],
    currentPage: 1,
    isLoading: true,
  }

  componentDidMount() {
    api
      .fetchArticles({
        page: 1,
        orderBy: 'newest',
        'page-size': 5,
        'show-fields': 'thumbnail',
      })
      .then(({ data }) => {
        this.setState({
          newestArticles: data.response.results,
          isLoading: false,
        })
      })
  }

  // getArticlesBySection(page, section) {
  //   api
  //     .fetchArticles({ page: 1, section: this.props.section })
  //     .then(({ data }) => {
  //       this.setState({
  //         articles: data.response.results,
  //         isLoading: false,
  //       })
  //     })
  // }

  render() {
    const { isLoading, newestArticles } = this.state

    return (
      <View style={styles.container}>
        {isLoading && <Text>Loading...</Text>}

        <Header />
        <ScrollView>
          <View>
            <Text style={styles.mostRecent}>Most Recent:</Text>
            <FlatList
              data={newestArticles}
              renderItem={({ item }) => {
                return <ArticleCard articleInfo={item} />
              }}
            />
          </View>
        </ScrollView>
        {/* <ArticlesBySection
          getArticlesBySection={this.getArticlesBySection.bind(this)}
        /> */}
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4682B4',
    textAlign: 'center',
  },
})
