import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.grey,
        shadowColor: "black",
        shadowOffset:{
            height: 5,
            width:3
        },
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
        borderRadius:5
    }
})