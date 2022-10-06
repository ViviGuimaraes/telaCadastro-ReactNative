import React from "react";

import { TouchableOpacity,  StyleSheet, Text } from "react-native";

         import COLORS from "../colors/colors";

const Button =({title, onPress=(()=>{})})=>{

    return (

        <TouchableOpacity style={estilos.button} activeOpacity={0.8} onPress={onPress}>
           
            <Text style={estilos.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({

    button:{
    height:50,
    width:"60%",
    backgroundColor:COLORS.orange,
    marginLeft: 50,
    marginVertical:0,
    justifyContent:"center",
    borderRadius:10,
    marginBottom:20,
    paddingLeft: 40,
    },
    title:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:18,

    }
});


export default Button;

