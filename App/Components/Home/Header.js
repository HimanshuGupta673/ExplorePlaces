import { View, Text,Image, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../Shared/Colors'

export default function Header() {
  return (
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',gap:5,alignItems:'center'}}>
      <Image source={require('./../../../assets/logo.png')}
      style={styles.logo}
      />
      <View>
        <TextInput placeholder='Search' style={styles.search}/>
      </View>
      <Image style={styles.userImage} source={require('./../../../assets/placeholder.jpg')}/>
    </View>
  )
}
const styles = StyleSheet.create({
  logo:{
    width:50,
    height:50
},
search:{
    borderWidth:1,
    borderColor:Colors.BLACK,
    padding:4,
    borderRadius:50,
    paddingLeft:10 ,
    width:Dimensions.get('screen').width*0.6
},
userImage:{
      width:50,
      height:50,
      borderRadius:100
  }
})
