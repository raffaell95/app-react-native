/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, useState, useEffect } from 'react'
import Feed from './src/Views/Feed/Feed'
import Login from './src/Views/Login/Login'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const navigator = createStackNavigator({
  Login: {screen: Login},
  Feed: {screen: Feed}
})

const AppContainer = createAppContainer(navigator)

const App = () => {

  return (
    <AppContainer/>
  )
}

export default App
