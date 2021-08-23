import React from 'react'
import {Text, StyleSheet, View, Image, FlatList} from 'react-native'
import useResult from '../hooks/useResult'

const ResultsShowScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const [result, status, error, statusOptions] = useResult(id)

  const renderPhoto = ({item}) => {
    return <Image style={styles.imageStyle} source={{uri: item}} />
  }

  return (
    <>
      {status === statusOptions.error ? <Text>{error}</Text> : null}
      {status === statusOptions.loading ? <Text>Loading...</Text> : null}
      {status === statusOptions.idle ? (
        <>
          <Text>{result.name}</Text>
          <FlatList
            data={result.photos}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            renderItem={renderPhoto}
          />
        </>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    marginBottom: 5,
  },
})

export default ResultsShowScreen
