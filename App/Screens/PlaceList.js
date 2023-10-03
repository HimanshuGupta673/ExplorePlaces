import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import PlaceItem from './PlaceItem'
import PlaceItemBig from './PlaceItemBig'
// import { useNavigation } from '@react-navigation/native'

export default function PlaceList({placeList}) {

//   const navigator=useNavigation();
//   const onPlaceClick=(item)=>{
//     navigator.navigate('place-detail',{place:item}); 
//   }
  return (
    <View style={{marginBottom:30}}>
    
      <Text
      style={{fontSize:20,fontFamily:'raleway-bold',marginTop:10}}
      >Found {placeList.length} Places</Text>

      <FlatList
      data={placeList}
      renderItem={({item,index})=>(
        <TouchableOpacity key={index} >
            {index%4==0?
            <PlaceItemBig place={item} />
            :<PlaceItem place={item} />}
         </TouchableOpacity>
            
      )}
      />
    </View>
  )
}