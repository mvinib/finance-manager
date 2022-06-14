import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Register } from '../screens/register'

export type AppRoutesParamList = {
  Register: undefined
}

const { Navigator, Screen } = createStackNavigator<AppRoutesParamList>() as unknown as { Navigator: any, Screen:any, Group:any }

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Register">
        <Screen name="Register" component={Register}/>
      </Navigator>
    </NavigationContainer>
  )
}