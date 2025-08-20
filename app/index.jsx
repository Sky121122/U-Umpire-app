
import { useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';
import Styles from "../app/styles";

const Home = () => {
const [isLoading, setISLoading] = useState(false)
const navigate = useNavigation()
const timeoutRef = useRef(null)
const homeoutRef = useRef(null)

// --------- splash screen ------------- 
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);
  
// -------- handle Start ----- 
const timeInterval = () =>{
timeoutRef.current =  setTimeout(()=>{
    setISLoading(true);
  },2000);
}

const homeRoute = () =>{
  homeoutRef.current = setTimeout(()=>{
    navigate.navigate("home")
  },3000)
}

const handleStart = () =>{
    timeInterval();
    homeRoute();
}
useEffect(()=>{
  return()=>{
    clearTimeout(timeoutRef.current)
    clearTimeout(homeoutRef.current)

  } 
},[])

  return (
    <View style={Styles.container}>

      <View>
        <Text style={Styles.heading}>U UMPIRE</Text>
      </View>

      <View style={Styles.imageContainer}  >
          <Image style={{height:"100%", width:"100%"}} source={require("../assets/images/cricket.png")}/>
      </View>
      {/* ----------- lets start button------------------ */}
      <View style={Styles.buttonContainer}>
        <Pressable style={Styles.btn} onPress={handleStart}>
          <Text style={Styles.btnText}>Let's Start
        </Text>
        </Pressable>
          <Pressable style={Styles.btn} onPress={()=>navigate.navigate("coin")}>
          <Text style={Styles.btnText}>Toss a Coin
        </Text>
        </Pressable>
      </View>
      <View style={Styles.loading}>
{
  isLoading ? (
    <>
       <ActivityIndicator />
        <Text>Loading....</Text>
    </>
  ) : <Text>By Saket</Text>
}

        
      </View>
    </View>
  )
}

export default Home