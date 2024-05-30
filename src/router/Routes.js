import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from '../screen/LoginPage'
import MapScreen from '../screen/MapScreen'
const Stack = createStackNavigator()

const Routes = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='LoginPage'>
    <Stack.Screen name="LoginPage" component={LoginPage}/>
    <Stack.Screen name="MapScreen" component={MapScreen}/>
   </Stack.Navigator>
  )
}

export default Routes