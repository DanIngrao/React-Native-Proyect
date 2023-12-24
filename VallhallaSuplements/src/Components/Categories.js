import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import categories from '../Data/categories.json'

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.container}
        data={categories}
        keyExtractor={item => item} 
        renderItem={({item})=> <CategoryItem category={item} navigation={navigation}/>} 
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%'
  }
})