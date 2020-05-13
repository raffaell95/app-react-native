import React, { Fragment, useState } from 'react'
import { TextInput, Button, View,  Text, Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import estilo from './estilo'
import efetuarLogin from '../../api/login'


const Login = ({ navigation }) => {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagemErro, setMensagemErro] = useState('')

  const tentarLogar = async () => {
    try {
      const token = await efetuarLogin(usuario, senha)
      await AsyncStorage.setItem('instalura_token', token)
      navigation.replace('Feed', {nome: usuario})
    } catch (erro) {
      setMensagemErro(erro.message)
    }
  }

  return (
    <Fragment>
      <View style={estilo.container}>
        <TextInput onChangeText={texto => setUsuario(texto)} style={estilo.inputs} placeholder="Usuário" />
        <TextInput onChangeText={texto => setSenha(texto)} style={estilo.inputs} placeholder="Senha" secureTextEntry={true} />
        <Text>{mensagemErro}</Text>
      </View>
      <Button title="Entrar" onPress={tentarLogar} />
    </Fragment>
  )
}

Login.navigationOptions = ()=>{
  
  const opcoes = {
    title: 'Login'
  }

  if(Platform.OS == 'android'){
    opcoes.header = null
  }

  return opcoes
}

export default Login
