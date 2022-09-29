// é a própria biblioteca, sendo assim deve ser o primeiro a importar
import React from "react";
import { StyleSheet } from "react-native";

import { ScrollView, Text,View  } from "react-native";

import COLORS from "../colors/colors";
import Input from "../componentes/input";
 import Button from "../componentes/button";

//Criacao da tela de cadastro  - COMPONENTE

const Cadastro = () => {

    return(

        <ScrollView style={estilo.scroll}>

            <Text style={estilo.textTitle}>
                 Cadastro de Pacientes
            </Text>

            <View style={estilo.viewForms}>

            <Input label="Nome completo "
                    placeholder = "Escreva o nome completo "
                     //iconName="ybook-outline"
                    //    error={errors.titulo}
                      onFocus={()=>{handlerErrors(null, 'Nome')}}
                      onChangeText={(text)=>handlerOnChange(text, 'Nome')}/>


                <Input label="Telefone "
                    placeholder = " DDD + número do telefone "
                     //iconName="ybook-outline"
                    //    error={errors.titulo}
                      onFocus={()=>{handlerErrors(null, 'Telefone')}}
                      onChangeText={(text)=>handlerOnChange(text, 'Telefone')}/>


                <Input label=" Celular "
                    placeholder = " DDD + número do Celular "
                     //iconName="ybook-outline"
                    //    error={errors.titulo}
                      onFocus={()=>{handlerErrors(null, 'celular')}}
                      onChangeText={(text)=>handlerOnChange(text, 'celular')}/>


                <Input label=" Email"
                    placeholder = " Digite seu email "
                     //iconName="ybook-outline"
                    //    error={errors.titulo}
                      onFocus={()=>{handlerErrors(null, 'email')}}
                      onChangeText={(text)=>handlerOnChange(text, 'email')}/>


            </View>

            <Text style={estilo.textTitle}>
                 Informações do Responsável 
            </Text>

            <View style={estilo.viewForms}>

            <Input label=" Nome do Responsável "
                    placeholder = " Digite o nome do Responsável  "
                     //iconName="ybook-outline"
                    //    error={errors.titulo}
                      onFocus={()=>{handlerErrors(null, 'NomeResponsavel')}}
                      onChangeText={(text)=>handlerOnChange(text, 'NomeResponsavel')}/>

            <Input label=" Telefone do Responsável "
                    placeholder = " Digite o telefone do Responsável  "
                     //iconName="ybook-outline"
                    //    error={errors.titulo}
                      onFocus={()=>{handlerErrors(null, 'TelefoneResponsavel')}}
                      onChangeText={(text)=>handlerOnChange(text, 'TelefoneResponsavel')}/>


        <Button title="CADASTRAR"
            //   onPress={validate}
            />

            </View>

           



        </ScrollView>
    )
}



const estilo = StyleSheet.create({

    scroll:{
        paddingTop:5,
        paddingHorizontal:10,
        width:"100%",
        height:"100%",
        backgroundColor:COLORS.white,
        paddingLeft: 30,
       
      },

      textTitle:{
        color:COLORS.black,
        fontSize:25,
        paddingLeft: 10,
         paddingBottom:10,

         paddingTop:30,
         fontWeight:"300",
      },

      viewForms:{
        width:"90%",
        height:"50%",
        paddingTop:20,
        paddingLeft: 10,
        borderRadius:10,
       
        backgroundColor:COLORS.cinza,
      },

});

export default Cadastro ;