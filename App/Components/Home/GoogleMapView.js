import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
export default function GoogleMapView() {
  return (
    <View style={{marginTop:20}}>
     <MapView style={{
        width:Dimensions.get('screen').width*0.9,
        height:Dimensions.get('screen').height*0.23,
        borderRadius:20
        }}>

     </MapView>
    </View>
  )
}