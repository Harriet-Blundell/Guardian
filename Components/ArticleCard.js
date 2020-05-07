import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { formatDate } from '../utils.js'
import { Linking } from 'expo'

const ArticleCard = (props) => {
  const {
    webPublicationDate,
    webTitle,
    webUrl,
    sectionName,
    fields,
  } = props.articleInfo

  return (
    <View style={styles.articleContainer}>
      {fields && (
        <Image style={styles.images} source={{ uri: fields.thumbnail }} />
      )}

      <Text style={styles.articleTitle} onPress={() => Linking.openURL(webUrl)}>
        {webTitle}
      </Text>

      <Text style={styles.articleDate}>
        Published: {formatDate(webPublicationDate)} |{' '}
        <Text style={styles.articleName}>{sectionName}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  images: {
    width: '95%',
    height: 170,
    marginLeft: 10,
    marginTop: 10,
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
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
})

export default ArticleCard
