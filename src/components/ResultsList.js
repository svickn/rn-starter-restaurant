import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ResultsList = ({title, results}) => {
  const renderResult = ({item}) => {
    return <Text>{item.name}</Text>
  }

  return (
    <View>
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
  },
})

export default ResultsList
