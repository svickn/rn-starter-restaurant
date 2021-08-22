import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = React.useState('')
  const {searchApi, results, error, status, statusOptions} = useResults()

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {status === statusOptions.error ? <Text>{error}</Text> : null}
      {status === statusOptions.loading ? <Text>Loading...</Text> : null}
      {status === statusOptions.idle ? (
        <Text>We have found {results.length} results.</Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
