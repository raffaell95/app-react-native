import React, { Fragment, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import estilo from './estilo'


const Foto = ({ urlFoto, descricao, qtdLikes, curtirFoto, imgLike }) => {

  const [curtiu, setCurtiu] = useState(false)

  const [likes, setLikes] = useState(qtdLikes)

  const clicouCurtir = () => {
    const [novoEstCurtiu, qnt] = curtirFoto(curtiu, likes)
    setLikes(qnt)
    setCurtiu(!novoEstCurtiu)
  }

  return (
    <Fragment>
      <Image source={{ uri: urlFoto }} style={estilo.imagem} />
      <Text>{descricao}</Text>
      <View style={estilo.viewLikes}>
        <TouchableOpacity onPress={clicouCurtir}>
          <Image source={imgLike(curtiu)} style={estilo.like} />
        </TouchableOpacity>
        <Text>curtidas {likes}</Text>
      </View>
    </Fragment>
  )
}



export default Foto
