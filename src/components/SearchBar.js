import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>SearchBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#DDD',
    height: 50,
    borderRadius: 5,
    margin: 20,
  },
})

export default SearchBar
