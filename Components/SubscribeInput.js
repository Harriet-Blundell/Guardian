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
  }

  handleChange = (value) => {
    this.setState({
      email: value,
    })
  }

  handleSubmit = () => {
    const { email } = this.state

    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    if (email === '' || emailRegex.test(email) === false) {
      Alert.alert('Please enter a valid email address')
      this.setState({
        email: '',
      })
    } else {
      Alert.alert('You have successfully subscribed to the Guardian!'),
        this.setState({
          email: '',
        })
    }
  }

  render() {
    const { email } = this.state
    return (
      <View style={styles.subscribeInputContainer}>
        <Text
          style={{
            backgroundColor: '#191970',
            textAlign: 'center',
            paddingLeft: 70,
            paddingRight: 70,
          }}
        >
          <Text style={styles.subscribeText}>
            Subscribe to get updates on the latest news...
          </Text>
        </Text>

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
  subscribeInputContainer: {
    backgroundColor: 'whitesmoke',
  },

  subscribeText: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 30,
    color: 'white',
  },

  textInput: {
    height: 40,
    width: 300,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  subscribeBtnContainer: {
    justifyContent: 'center',
    marginTop: 10,
    width: 100,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'black',
    marginLeft: 150,
    marginBottom: 5,
    elevation: 5,
  },

  subscribeBtnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  errorMsg: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    marginTop: 2,
  },
})

export default Subscribe
