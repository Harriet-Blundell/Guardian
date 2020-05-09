import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'

class SearchInput extends Component {
  state = {
    searchTerm: '',
  }

  handleSearchInput(value) {
    this.setState({
      searchTerm: value,
    })
  }

  render() {
    return (
      <View style={styles.searchInputContainer}>
        <TextInput
          placeholder='Search...'
          style={styles.searchInputText}
          onChangeText={(value) => this.handleSearchInput(value)}
        />

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ArticleList', {
              searchTerm: this.state.searchTerm,
            })
          }
        >
          <View style={styles.searchBtn}>
            <Image
              source={require('../Images/searchIcon2.png')}
              style={styles.searchIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 5,
  },

  searchInputText: {
    flex: 1,
    height: 40,
    width: 300,
    marginBottom: 10,
    marginLeft: 5,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    paddingLeft: 15,
  },

  searchIcon: {
    width: 30,
    height: 30,
    marginTop: 5,
    tintColor: 'white',
  },

  searchBtn: {
    width: 65,
    height: 40,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 5,
    borderRadius: 150,
    alignItems: 'center',
    backgroundColor: '#4682B4',
    elevation: 10,
  },

  searchText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default SearchInput
