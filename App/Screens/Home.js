import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'

export default function Home() {
  return (
    <SafeAreaView style={{padding:20}}>
      <Header/>
      <GoogleMapView/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

})
