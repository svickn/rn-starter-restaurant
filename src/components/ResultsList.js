import React from 'react'
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {
  if (!results.length) {
    return null
  }

  const renderResult = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ResultsShow', {id: item.id})}
      >
        <ResultsDetail result={item} />
      </TouchableOpacity>
    )
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

export default withNavigation(ResultsList)
