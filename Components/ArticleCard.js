import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { formatDate } from '../utils.js'
import { Linking } from 'expo'

const ArticleCard = (props) => {
  const {
    webPublicationDate,
    webTitle,
    webUrl,
    sectionName,
    fields,
    apiUrl,
  } = props.articleInfo

  const { navigation } = props

  return (
    <View style={styles.articleContainer}>
      {fields && (
        <Image style={styles.images} source={{ uri: fields.thumbnail }} />
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate('SingleArticle', { apiUrl: apiUrl })}
      >
        <Text style={styles.articleTitle}>{webTitle}</Text>
      </TouchableOpacity>

      <Text style={styles.articleDate}>
        Published: {formatDate(webPublicationDate)} |{' '}
        <Text style={styles.articleName}>{sectionName}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  images: {
    width: '99.8%',
    height: 170,
  },

  articleTitle: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  articleTopic: {
    color: 'black',
  },

  articleName: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 17,
    color: '#4682B4',
    fontWeight: 'bold',
  },

  articleDate: {
    marginLeft: 10,
    fontSize: 17,
    marginBottom: 10,
  },

  articleContainer: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    borderTopWidth: 1.5,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    backgroundColor: '#FFFAFA',
  },
})

export default ArticleCard
