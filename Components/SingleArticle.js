import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
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

    const { webPublicationDate } = this.state.singleArticle

    return (
      <View style={styles.singleArticleContainer}>
        <ScrollView>
          {isLoading && <ActivityIndicator size='large' color='#4682B4' />}

          {!isLoading && singleArticle.fields.thumbnail && (
            <Image
              style={styles.singleArticleImage}
              source={{ uri: singleArticle.fields.thumbnail }}
            />
          )}

          <Text style={styles.singleArticleTitle}>
            {singleArticle.webTitle}
          </Text>

          {!isLoading && (
            <Text style={styles.mainContentContainer}>
              <Text style={styles.singleArticleDate}>
                Published: {formatDate(webPublicationDate)} |{' '}
                <Text style={styles.singleArticleSection}>
                  {singleArticle.sectionName}
                </Text>
              </Text>
              {'\n'}
              {'\n'}

              <Text style={styles.singleArticleBodyText}>
                {singleArticle.fields.bodyText}
              </Text>
            </Text>
          )}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ArticleList')}
          >
            <Text style={styles.backBtn}>BACK</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  singleArticleContainer: {
    backgroundColor: '#FFFAFA',
  },

  singleArticleTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 3,
    marginBottom: 10,
    paddingBottom: 20,
    borderBottomColor: '#DCDCDC',
  },

  singleArticleImage: {
    width: '100%',
    height: 260,
    alignSelf: 'center',
    marginBottom: 15,
  },

  singleArticleDate: {
    flex: 1,
    flexWrap: 'wrap',
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
    lineHeight: 32,
  },

  backBtn: {
    fontSize: 15,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#4682B4',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
    marginLeft: 150,
    marginBottom: 10,
    color: 'white',
    elevation: 5,
  },

  mainContentContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
  },
})

export default SingleArticle
