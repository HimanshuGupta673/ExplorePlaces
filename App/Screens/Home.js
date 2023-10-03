import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'
// import GlobalApi from '../Services/GlobalApi'
import PlaceList from './PlaceList'
import {results} from './data'
export default function Home() {
  const [placeList,setPlaceList] = useState([]);
  useEffect(()=>{
    // GetNearBySearchPlace();
    setPlaceList(results)
  },[])
  // const GetNearBySearchPlace = () =>{
  //   GlobalApi.nearByPlace().then(resp=>{
  //     setPlaceList(resp.data.results);
  //   })
  // }
  return (
    <ScrollView style={{padding:20,backgroundColor:'#fff',flex:1}}>
      <SafeAreaView>

      <Header/>
      <GoogleMapView/>
      <CategoryList/>
      {placeList?<PlaceList placeList={placeList}/>:null}
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({

})
