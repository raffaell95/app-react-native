import React, { Fragment, useState, useEffect } from 'react'
import { ScrollView, FlatList, StatusBar, Platform } from 'react-native'
import { Cabecalho } from '../../Components/Cabecalho'
import { Foto } from '../../Components/Foto'
import lerFotos from '../../api/feed'
import { Comentarios } from '../../Components/Comentarios'
import { curtirFoto, imgLike } from '../../api/curtidas'


const Feed = () => {

  const [fotos, setFotos] = useState([])
    useEffect(() => {   
      lerFotos(setFotos)
  },[])

  let altura = 0

  return (
    <ScrollView style={{marginTop: altura}}>
      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL} />
            <Foto 
            urlFoto={item.url} 
            descricao={item.description} 
            qtdLikes={item.likes}
            imgLike={imgLike}
            curtirFoto={curtirFoto}
            />
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>
        } />
    </ScrollView>
  )
}

Feed.navigationOptions = ({ navigation })=>{
  
  const opcoes = {
    title: navigation.getParam('nome')
  }

  if(Platform.OS == 'android'){
    opcoes.header = null
  }

  return opcoes
}

export default Feed
