import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../Services/shopService'
//import categories from '../Data/categories.json'

const Categories = ({navigation}) => {
  
  //const categories = useSelector(state => state.shopReducer.value.categories)
  
  const {data, isLoading, error} = useGetCategoriesQuery()

  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.container}
        data={data}
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