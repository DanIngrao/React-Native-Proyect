import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Header from '../Components/Header';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        header: ({route}) => <Header title='Bienvenido'/>
      }}
    >
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Signup' component={Signup}/>
    </Stack.Navigator>
  )
}

export default AuthStack