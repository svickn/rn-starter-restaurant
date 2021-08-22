import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = React.useState('')
  const [results, setResults] = React.useState([])

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'baton rouge, la',
      },
    })
    setResults(response.data.businesses)
  }

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>We have found {results.length} results.</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
