import React from 'react'
import { NativeRouter, Route, Link } from 'react-router-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import formatDate from '../utils.js'
import { Linking } from 'expo'

const ArticleCard = (props) => {
  const {
    webPublicationDate,
    webTitle,
    webUrl,
    sectionName,
  } = props.articleInfo

  return (
    <View style={styles.articleContainer}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(webUrl)
        }}
      />

      <Text style={styles.articleTitle}>{webTitle}</Text>

      <Text style={styles.articleName}>
        <Text style={styles.articleTopic}>Topic: </Text>
        {sectionName}
      </Text>

      <Text style={styles.articleDate}>
        Published: {formatDate(webPublicationDate)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
    fontSize: 20,
    color: '#1E90FF',
    fontWeight: 'bold',
  },

  articleDate: {
    marginLeft: 10,
    fontSize: 15,
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
