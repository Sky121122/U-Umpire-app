import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { Button, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from "../app/styles"
const Home = () => {

let [run, setRun] = useState(0)
let [ball, setBall] = useState(0)
let [runs, setRuns] = useState(0)
let [over, setOver] = useState(0)
let [wide, setWide] = useState(0)
let [totalWide, setTotalWide] = useState(0)
let [runRate, setRunRate] = useState(0)
const [isVisible, setIsVisible] = useState(false)
const [matchHistory, setMatchHistory]= useState([])

// ----------- set local time ----------- 
const [time, setTime] = useState();

useEffect(()=>{
  const timer = setInterval(() => {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime)
  }, 1000);
  
  return () => clearInterval(timer) 
  
},[])

// ---------- calculate every point at evry over --------------- 

const matchData = [];

function allMatchData (runs, over, totalWide){
  matchData.push({
      run:runs, wide:totalWide,overs:over
  });
    setMatchHistory(prev=>{
     const updated = [...prev, matchData];
        return updated
    }
    )
}




// ------------ handle run buttun -----------
const handleUpRun = () =>{
setRun(run+=1);
}
const handleDownRun = () =>{
  setRun(run-=1);
  if(run<0){
    alert("Run can't be less than 0");
    setRun(run=0)
  }
  
}

// ----------- handle ball button ---------- 
const handleUpBall= ()=>{
  setBall(ball+=1);
  if(ball==7){
    setOver(over+=1);
    setRuns(runs+=run)
    setBall(0)
    setRun(0)
    setTotalWide(totalWide+=wide)
    setWide(wide=0)
    // ---------- run rate ------ 
    let newRunrate = (runs/over).toFixed(2)
      setRunRate(newRunrate)
    
      allMatchData(runs, over, totalWide)
     
  }

  
}

const handleDownBall=()=>{
  setBall(ball-=1);
  if(ball<0){
    alert("Ball can't be less than 0");
    setBall(ball=0)
  }
}

// --------- handle wide button ------- 
const handleWide = () =>{
  setWide(wide+=1)
  setRun(run+=1)
}

// ------- handle detail button ---------- 
const handleModal = () =>{
  setIsVisible(true)
} 



  return (
    <SafeAreaView style={{backgroundColor:"#D9D3C7"}}>
      <Image style={Styles.stadiumimg} source={require("../assets/images/cricketpng.png")}></Image>
      <View style={Styles.homemain}>

{/* ------------- header -------------  */}
  <View style={Styles.mainheader}>
          <Text style={{color:"white", fontSize:30, fontWeight:500}}>U UMPIRE</Text>
          <Text style={{color:"white", fontSize:20, fontWeight:500}}>{time}</Text>
        </View>

        {/* ---------- total run s ------- */}
        <View style={Styles.mainheader}>
          <Text style={{color:"white", fontSize:20, fontWeight:500}}>Total Runs: {runs}</Text>
          <Text style={{color:"white", fontSize:20, fontWeight:500}}>Total  Overs: {over}</Text>
        </View>

        {/* ---------- run rate secion ----------------  */}
               <View style={Styles.mainheader}>
          <Text style={{color:"white", fontSize:20, fontWeight:500}}>Run Rate: {runRate} </Text>
          <Text style={{color:"white", fontSize:20, fontWeight:500}}>Total Wide: {totalWide}</Text>
        </View>
{/* ------------------ this over run s------------- */}

    <View style={Styles.thisover}>
      <Image style={Styles.lightimage} source={require("../assets/images/lights.jpg")}></Image>
        <Text style={{color:"white", fontSize:22, fontWeight:500}}>Wide: {wide}</Text>
        <Text style={{color:"white", fontSize:22, fontWeight:500}}>Runs: {run}</Text>
          <Text style={{color:"white", fontSize:22, fontWeight:500}}> Balls: 0{ball}</Text>
    </View>
      </View>
{/* ----------------------- controll button ------------ */}
      <View style={Styles.homemain}>
        <View style={Styles.homebutton}>
            <View style={Styles.btncontainer}>

              {/* -------------- run button ------------- */}
              <Text style={{color:"white", fontSize:30}}>Run</Text>
              <TouchableOpacity style={Styles.homebtn }  onPress={handleUpRun}>
                <Text style={{color:"white", fontSize:30, fontWeight:"bold"}}>+</Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={Styles.homebtn} onPress={handleDownRun}> 
                <Text style={{color:"white", fontSize:40, fontWeight:"bold"}}>-</Text>
              </TouchableOpacity>

                
            </View>
            
            <View style={Styles.btncontainer}>

              {/* ----------------- ball button -------------- */}
                <Text style={{color:"white", fontSize:30}}>Balls</Text>
               <TouchableOpacity style={Styles.homebtn } onPress={handleUpBall}>
                <Text style={{color:"white", fontSize:30, fontWeight:"bold"}}>+</Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={Styles.homebtn} onPress={handleDownBall}>
                <Text style={{color:"white", fontSize:40, fontWeight:"bold"}}>-</Text>
              </TouchableOpacity>
            </View>
            
        </View>
      </View>
      
      

      <View style={Styles.footer}>
        {/* ------------- wide and details button -------------- */}
     
      <View style={{flexDirection:"row", gap:"45%"}}>
          <TouchableOpacity style={Styles.wide} onPress={handleWide}> 
                <Text style={{color:"white", fontSize:20, fontWeight:"bold"}}>Wide</Text>
              </TouchableOpacity>
          <TouchableOpacity style={Styles.wide} onPress={handleModal}> 
                <Text style={{color:"white", fontSize:20, fontWeight:"bold"}}>Detail</Text>
              </TouchableOpacity>
      </View>
              {/* ---------- modal section ----------- */}
              <Modal visible={isVisible} animationType='slide' transparent>
                <View style={{flex:1, justifyContent:"flex-end"}}>
                  <View style={{backgroundColor:"#72A13A", height:500, width:"100%"}}>
                    <Button title='Close' onPress={()=>setIsVisible(false)} ></Button>

                       <View style={{flexDirection:"row", justifyContent:"space-around", gap:40, marginTop:10, padding:20}}>
                        <Text style={{fontSize:20, fontWeight:500}}>Over</Text>
                        <Text style={{fontSize:20, fontWeight:500}}>Total Run</Text>
                        <Text style={{fontSize:20, fontWeight:500}}>Wide</Text>       
                       </View>
                         <ScrollView  style={{ height:300, width:"100%", padding:10}}>
                          {
                            matchHistory.flat().map((item ,index, arr)=>{
                                 const runDiff = index === 0 ? item.run : item.run - arr[index - 1].run;
                                 const wideDiff = index === 0 ? item.wide : item.wide - arr[index - 1].wide;
                              
                             
                            return(
                              <View key={index} style={{flexDirection:"row",justifyContent:"space-around", alignItems:"center", gap:40, marginBottom:10,marginTop:10,  backgroundColor:"#28738F", borderRadius:12, padding:4}}>
                                <Text style={{fontSize:30, color:"white"}}> {item.overs}</Text>
                               <Text style={{fontSize:30}}> {runDiff}</Text>
                               <Text style={{fontSize:30}}> {wideDiff}</Text>
                               
                              </View>
                              );
                            })
                            
                            }
                       </ScrollView>
                      </View>
                </View>
              </Modal>


        <Text style={{color:"black", fontSize:16, marginTop:30}}>This App is Developed By Admin 
          <Link href={"https://saketfolio.netlify.app/"}> @Saket</Link>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Home