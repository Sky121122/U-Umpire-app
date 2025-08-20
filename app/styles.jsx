import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:40,
    },
    imageContainer:{
        width:"100%",
        height:"30%",
        justifyContent:"center",
        alignItems:"center",
        objectFit:"cover"
    },
    heading:{
        fontSize:40,
        fontWeight:"bold",
        width:"100%",
        color:"white",
        backgroundColor:"#72A13A",
        padding:10,
        borderRadius:8
    },
    buttonContainer:{
        width:"100%",
        padding:20,
        gap:10,
    },
       btn:{
        backgroundColor:"#28738F",
        height:60,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        width:"auto"
    },
    btnText:{
        color:"white",
        fontSize:20,
        fontWeight:500
    },
    loading:{
        height:60,
        justifyContent:"center",
        alignItems:"center"
        
    },

    // ---------- home --------- 
    homemain:{
        height:300,
        width:"100%",
        padding:10,
        gap:12
    },
    mainheader:{
        width:"100%",
        height:60,
        borderRadius:12,
        backgroundColor:"black",
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:8,
        paddingHorizontal:20,
        justifyContent:"space-between",
    },
    thisover:{
         width:"100%",
        height:80,
        borderRadius:12,
        flexDirection:"row",
        alignItems:"center",
       paddingHorizontal:20,
        marginTop:20,
        justifyContent:"space-between",
    },
    homebutton:{
        height:"100%",
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    btncontainer:{
        height:250,
        width:160,
        marginTop:150,
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"black",
        borderRadius:12,
    },
    homebtn:{
        backgroundColor:"#72A13A",
        height:80,
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    },
    lightimage:{
        backgroundColor:"red",
        height:100,
        width:"111%",
        borderRadius:12,
        margin:"auto",
        position:"absolute",
    },
    stadiumimg:{
        height:700,
        width:"100%",
        marginTop:500,
        position:"absolute"
    },
    // ----------- wide button ---------
    wide:{
        backgroundColor:"#28738F",
        width:"auto",
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
        borderColor:"#72A13A",
        borderWidth:3,

    },

    // ------------ footer ------------ 

    footer:{
          height:300,
        width:"100%",
        padding:10,
        gap:12,
        // backgroundColor:"red",
        justifyContent:"space-evenly",
        alignItems:"center"
    },

    // -------------- coin page ------------- 
    coins:{
        height: 200,
        width: 200,
        position: "absolute",
    }
    
})

export default Styles