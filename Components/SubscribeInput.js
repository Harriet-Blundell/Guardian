import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native'

class Subscribe extends Component {
  state = {
    email: '',
    showModal: false,
  }

  handleChange = (value) => {
    this.setState({
      email: value.trim(),
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
          showModal: false,
        })
    }
  }

  setModalVisible(value) {
    this.setState({
      showModal: value,
      email: '',
    })
  }

  closeModal() {
    this.setState({
      showModal: false,
    })
  }

  render() {
    const { email } = this.state
    return (
      <View style={styles.subscribeInputContainer}>
        <Modal
          transparent={true}
          animationType='slide'
          visible={this.state.showModal}
          onRequestClose={() => {
            this.closeModal()
          }}
        >
          <View style={styles.subscribeInputContainer}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={(value) => this.handleChange(value)}
                placeholder='Enter e-mail address'
                onSubmitEditing={() => this.handleSubmit()}
              />

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.showModal)
                }}
              >
                <TouchableOpacity onPress={() => this.handleSubmit()}>
                  <View style={styles.submitBtnContainer}>
                    <Text style={styles.submitBtnText}>SUBMIT</Text>
                  </View>
                </TouchableOpacity>
              </TouchableHighlight>

              <TouchableWithoutFeedback
                onPress={() => this.setModalVisible(!this.state.showModal)}
              >
                <View style={styles.closeModalBtn}>
                  <Text style={styles.closeModalText}>CLOSE</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </Modal>

        <Text style={styles.subscribeHeaderContainer}>
          <Text style={styles.subscribeText}>
            Subscribe to get updates on the latest news...
          </Text>
        </Text>

        <TouchableWithoutFeedback onPress={() => this.setModalVisible(true)}>
          <View style={styles.subscribeBtnContainer}>
            <Text style={styles.subscribeBtnText}>SUBSCRIBE</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subscribeInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  subscribeHeaderContainer: {
    backgroundColor: '#191970',
    textAlign: 'center',
    paddingLeft: 70,
    paddingRight: 70,
    marginBottom: 10,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    height: 250,
    width: 350,
    alignItems: 'center',
    elevation: 10,
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
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  subscribeBtnContainer: {
    justifyContent: 'center',
    width: 150,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'black',
    marginBottom: 10,
    marginTop: 10,
    elevation: 5,
  },

  subscribeBtnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  submitBtnContainer: {
    justifyContent: 'center',
    width: 150,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#4682B4',
    marginTop: 40,
    marginBottom: 20,
    elevation: 5,
  },

  submitBtnText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  closeModalBtn: {
    justifyContent: 'center',
    width: 350,
    height: 35,
    backgroundColor: 'white',
    marginTop: 30,
    backgroundColor: '#E0E0E0',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 10,
  },

  closeModalText: {
    color: 'white',
    fontSize: 17,
    color: '#4682B4',
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
