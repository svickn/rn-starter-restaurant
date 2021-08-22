import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = React.useState('')
  const {searchApi, results, error, status, statusOptions} = useResults()

  const filterResultsByPrice = price => {
    return results.filter(r => r.price === price)
  }

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
        <>
          <Text>We have found {results.length} results.</Text>
          <ResultsList
            title="Cost Effective"
            results={filterResultsByPrice('$')}
          />
          <ResultsList
            title="Bit Pricier"
            results={filterResultsByPrice('$$')}
          />
          <ResultsList
            title="Big Spender!"
            results={filterResultsByPrice('$$$')}
          />
        </>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
