import { Platform } from 'react-native'

const lerFotos = async (callback) => {
    let url = 'https://api-mobile-exemplo.herokuapp.com'
    // if(Platform.OS == 'ios'){
    //   url = 'localhost'
    // }
    const fotosHTTP = await fetch(`${url}/feed`)
    const fotosJson = await fotosHTTP.json()
    callback(fotosJson)
  }

export default lerFotos