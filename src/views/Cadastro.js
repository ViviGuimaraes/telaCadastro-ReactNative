// é a própria biblioteca, sendo assim deve ser o primeiro a importar
import React from "react";

import { ScrollView, Text,View, StyleSheet } from "react-native";

import COLORS from "../colors/colors";
import Input from "../componentes/input";
 import Button from "../componentes/button";

//Criacao da tela de cadastro  - COMPONENTE

const Cadastro = () => {

// Capitura od dados com o uso de state
// armazena os dados digitados 
const [ inputs, setInputs] = React.useState({

  nome:'',
  telefone: '',
  celulae:'',
  email:''

});

// funcao que vai manipular a entrada dos doaos da state 
// no método onChangeText
const handlerOnChange = (text, input)=>{

  
  setInputs((prevState)=>(

    console.log(prevState),
  
    {...prevState, [input]:text}

  ));
}
// _______________ VALIDAÇÃO DOS DADOS DE CADASTRO________________

const [errors, setErrors] = React.useState({});


//funcao que configura as mensagens de erro 
const handlerErrors = (errorMesage, input) =>{

  setErrors( (prevState)=>({...prevState, [input]:errorMesage}));
}

//funcao de validacao
const validate = ()=>{

  let validate = true;

  if (!inputs.nome){
    validate = false;
    handlerErrors('Informe o nome do paciente.', 'nome');
  }

  if (!inputs.telefone) {
    validate = false;
    handlerErrors('Informe o telefone do paciente.', 'telefone');
  }


  if (!inputs.celular) {
    validate = false;
    handlerErrors('Informe o celular do paciente.', 'celular');
  }

  if (!inputs.email) {
    validate = false;
    handlerErrors('Informe o email do paciente.', 'email');
  }

  if (validate){

    //isso é paara enviar os dados para a API quando estiver pronta
    cadastrar();
    console.log('CADASTROU');
  }

  console.log(errors);

  const cadastrar = ()=>{

    try{
      console.log('Cadastrou');
    }catch(error){}

}


}



  


    return(

        <ScrollView style={estilo.scroll}>

            <Text style={estilo.textTitle}>
                 Cadastro de Pacientes
            </Text>

            <View style={estilo.viewForms}>

            <Input label="Nome completo "
                    placeholder = "Escreva o nome completo "
                    iconName="account"
                      error={errors.nome}
                      onFocus={()=>{handlerErrors(null, 'nome')}}
                      onChangeText={(text)=>handlerOnChange(text, 'nome')}/>


                <Input label="telefone "
                    placeholder = " DDD + número do telefone "
                    iconName="phone" 
                       error={errors.telefone}
                      onFocus={()=>{handlerErrors(null, 'telefone')}}
                      onChangeText={(text)=>handlerOnChange(text, 'telefone')}/>


                <Input label=" Celular "
                    placeholder = " DDD + número do Celular "
                    iconName="cellphone"
                      error={errors.celular}
                      onFocus={()=>{handlerErrors(null, 'celular')}}
                      onChangeText={(text)=>handlerOnChange(text, 'celular')}/>


                <Input label=" Email"
                    placeholder = " Digite seu email "
                    iconName="email"
                     error={errors.email}
                      onFocus={()=>{handlerErrors(null, 'email')}}
                      onChangeText={(text)=>handlerOnChange(text, 'email')}/>


            </View>

            <Text style={estilo.textTitle}>
                 Informações do Responsável 
            </Text>

            <View style={estilo.viewForms}>

            <Input label=" Nome do Responsável "
                    placeholder = " Digite o nome do Responsável  "
                     iconName="account-multiple"
                    
                      onFocus={()=>{handlerErrors(null, 'NomeResponsavel')}}
                      onChangeText={(text)=>handlerOnChange(text, 'NomeResponsavel')}/>

            <Input label=" Telefone do Responsável "
                    placeholder = " Digite o telefone do Responsável  "
                     iconName="phone-plus"
                   
                      onFocus={()=>{handlerErrors(null, 'TelefoneResponsavel')}}
                      onChangeText={(text)=>handlerOnChange(text, 'TelefoneResponsavel')}/>


        <Button title="CADASTRAR"
              onPress={validate}
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