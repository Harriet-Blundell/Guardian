import React from 'react'
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Pagination = (props) => {
  const { currentPage, handlePageClick, totalPages } = props

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        disabled={currentPage === 1}
        onPress={() => {
          handlePageClick(-1)
        }}
      >
        <View
          style={
            currentPage === 1 ? styles.buttonPrevInvalid : styles.buttonPrev
          }
        >
          <Text style={styles.buttonPrevText}>PREV</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.pageNumber}>
        {' '}
        {currentPage} / {totalPages}
      </Text>

      <TouchableOpacity
        onPress={() => {
          handlePageClick(1)
        }}
        disabled={currentPage === totalPages}
      >
        <View
          style={
            currentPage === totalPages
              ? styles.buttonNextInvalid
              : styles.buttonNext
          }
        >
          <Text style={styles.buttonNextText}>NEXT</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pageNumber: {
    fontSize: 17,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonPrev: {
    width: 90,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#4682B4',
  },

  buttonPrevInvalid: {
    backgroundColor: '#808080',
    width: 90,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonPrevText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },

  buttonNext: {
    width: 90,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#4682B4',
  },

  buttonNextText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },

  buttonNextInvalid: {
    backgroundColor: '#808080',
    width: 90,
    borderRadius: 5,
    alignItems: 'center',
  },
})

export default Pagination
