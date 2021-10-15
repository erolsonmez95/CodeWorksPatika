import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width:Dimensions.get("window").width/3,
        padding:5,
        margin:10,
        backgroundColor:'red',
        borderRadius: 5,
        alignItems:'center'
        
    },title: {
        fontWeight:'bold',
        fontSize:15,
        color:'white'
    }
    
})