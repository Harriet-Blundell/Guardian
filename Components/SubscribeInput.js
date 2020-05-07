import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native'

class Subscribe extends Component {
  state = {
    email: '',
    subscribed: false,
    error: false,
  }

  handleChange = (value) => {
    console.log(value, 'value of input')
    this.setState({
      email: value,
    })
  }

  handleSubmit = () => {
    const { email } = this.state

    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    if (email === '' || emailRegex.test(email) === false) {
      Alert.alert('Please enter a valid email address')
    } else {
      Alert.alert('You have successfully subscribed to the Guardian!'),
        this.setState({
          email: '',
        })
    }
  }

  render() {
    const { email, error } = this.state
    return (
      <View>
        <Text style={styles.subscribeText}>
          Enjoy what you're reading?, why not subscribe?
        </Text>

        {error !== 'false' ? (
          <Text style={styles.errorMsg}>{error}</Text>
        ) : (
          !error
        )}

        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(value) => this.handleChange(value)}
          placeholder='Enter e-mail address'
        />

        <TouchableOpacity onPress={() => this.handleSubmit()}>
          <View style={styles.subscribeBtnContainer}>
            <Text style={styles.subscribeBtnText}>SUBSCRIBE</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subscribeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#4682B4',
    color: 'white',
    marginTop: 15,
  },

  textInput: {
    height: 40,
    borderColor: 'whitesmoke',
    borderWidth: 2,
    width: 300,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
  },

  subscribeBtnContainer: {
    justifyContent: 'center',
    marginTop: 10,
    width: 90,
    borderRadius: 5,
    backgroundColor: '#4682B4',
  },

  subscribeBtnText: {
    color: 'white',
    textAlign: 'center',
  },

  errorMsg: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    marginTop: 2,
  },
})

export default Subscribe
