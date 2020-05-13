const efetuarLogin = async (usuario, senha) =>{

    let url = 'https://api-mobile-exemplo.herokuapp.com'
    // if(Platform.OS == 'ios'){
    //   url = 'localhost'
    // }
    const cabecalhoHTTP = {
        method: 'POST',
        body: JSON.stringify({
            userName: usuario,
            password: senha
        }),
        headers:{
            'Content-type': 'application/json'
        }
    }
    const resposta = await fetch(`${url}/users/login`, cabecalhoHTTP)

    if(resposta.ok){
       return resposta.headers.get('x-access-token')
    }else{
        throw new Error('Não foi possivel logar!')
    }

}

export default efetuarLogin