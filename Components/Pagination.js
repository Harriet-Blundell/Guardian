import React from 'react'
import { View, Button, Text } from 'react-native'

const Pagination = (props) => {
  console.log(props.currentPage, 'i am here')
  const { currentPage, handlePageClick } = props
  return (
    <View>
      <Button
        onPress={() => {
          handlePageClick(1)
        }}
        title='Next'
      />
      <Button
        disabled={currentPage === 1}
        onPress={() => {
          handlePageClick(-1)
        }}
        title='Back'
      />
    </View>
  )
}

export default Pagination
