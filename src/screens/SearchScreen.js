import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = React.useState('')
  const [results, setResults] = React.useState([])
  const [errorMsg, setErrorMsg] = React.useState()

  const searchApi = async searchTerm => {
    setErrorMsg('')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'baton rouge, la',
        },
      })

      setResults(response.data.businesses)
    } catch (error) {
      setErrorMsg('Something went wrong!')
    }
  }

  React.useEffect(() => {
    searchApi('pasta')
  }, [])

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
