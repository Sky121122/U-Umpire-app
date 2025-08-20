import { Image } from 'expo-image'
import { useNavigation } from 'expo-router'
import { MotiView } from 'moti'
import { useState } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from "../app/styles"
import head from "../assets/images/head.png"
import tail from "../assets/images/tail.png"


const Coin = () => {
const navigate = useNavigation()
const [ht, setHt] = useState("")
const [animated, setAnimated] = useState(false)


const handleTossbtn = ()=>{
  setHt("........")
  setAnimated(!animated)
    const randBit = Math.floor(Math.random() * 2); 
    let tossResult = randBit === 0 ? "HEAD":"TAIL";
    setTimeout(()=>{
      setHt(tossResult)  
    },3000)
  }
// ------------- animation coin ------------ 
 

  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={{color:"black", fontSize:30, fontWeight:500, marginTop:20}}>Toss Your Coin</Text>
      </View>

      <View style={Styles.container}>
        {/* ------------- coin image ------------  */}
        <MotiView 
        animate={{
          rotateX: animated ? "1440deg" : "0deg",
        }} 
        transition={{
          type:"timing",
          duration:3000,
        }}
        style={{position:"relative", justifyContent:"center", alignItems:"center", marginBottom:"20" }}>
          {
            ht== "HEAD" ? (<>
                <Image source={head} style={Styles.coins} ></Image>
            </>) : <Image source={tail} style={Styles.coins} ></Image>
          }
        </MotiView>  
              <Text style={{marginTop:"50", fontSize:30, fontWeight:500}}>{ht}</Text>

{/* --------- toss button --------------------- */}
            <TouchableOpacity style={{padding:20, backgroundColor:"#72A13A", borderRadius:12}} onPress={handleTossbtn}>
            <Text style={Styles.btnText}>TOSS</Text>
        </TouchableOpacity>
      </View>

     {/* ------------- naigation button ------------------ */}
        <View  style={Styles.buttonContainer}>
            <Pressable style={Styles.btn} onPress={()=>navigate.navigate("home")}>
            <Text style={Styles.btnText}>Let's Start</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Coin