import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../colors/colors";


const Input =( {label, iconName, error, onFocus=()=>{}, ...props})=>{

    return(

    <View style={estilos.formContainer}>

            {/* texto que fica em cima da input  */}
        <Text style={estilos.inputLabel}>{label}</Text>
    
            <View style={[estilos.inputContainer,{borderColor: error ? COLORS.red :COLORS.darkBlue }]}>

                <Icon name={iconName} style={estilos.Icon}/>

                <TextInput
                style={estilos.TextInput}
                autoCorrect={false}
                {...props}
                onFocus={()=>{onFocus()}}
                />
            </View>

        <Text>{error}</Text>
    
    </View>

    )
};

//CSS das imputs da tela de cadastro 

const estilos = StyleSheet.create({

    formContainer:{
        marginBottom:10,
    },

    inputLabel:{
        marginVertical:5,
        fontSize: 15,
        marginLeft: 10,
        color:COLORS.orange,
        fontWeight:"300",
    },
    
    inputContainer:{
        height:40,
        width: "85%",
        backgroundColor:COLORS.light,
        flexDirection:"row",
        borderWidth:1,
        borderRadius:9,
        paddingLeft: 10,
        paddingHorizontal:5,
        marginLeft: 10,
        marginBottom: 1,
        alignItems:"center",
        
    },

    TextInput:{
        color:COLORS.orange,
        fontWeight:"300",
    },

    Icon:{
        color:COLORS.orange,s
        
    }

});

export default Input;