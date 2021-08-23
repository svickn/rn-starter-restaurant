import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results}) => {
  const renderResult = ({item}) => {
    return <ResultsDetail result={item} />
  }

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderResult}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  containerStyle: {
    marginBottom: 20,
  },
})

export default ResultsList
