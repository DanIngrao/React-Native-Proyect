import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import MyProfile from '../Screens/MyProfile'
import ImageSelector from '../Screens/ImageSelector'

const Stack = createNativeStackNavigator()

const MyProfileStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='My Profile'
        screenOptions={{
                    header : () => <Header title="Perfil"/>
        }}
    >
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  )
}

export default MyProfileStack