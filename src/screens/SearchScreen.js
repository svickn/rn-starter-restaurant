import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = React.useState('')

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => console.log('submitted!')}
      />
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
