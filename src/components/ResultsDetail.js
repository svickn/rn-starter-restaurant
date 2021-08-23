import React from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{uri: result.image_url}} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.ratingStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 120,
    width: 250,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
  ratingStyle: {
    fontSize: 12,
    color: '#999',
  },
  viewStyle: {
    marginLeft: 15,
  },
})

export default ResultsDetail
