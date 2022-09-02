import 'react-native-gesture-handler'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import List from "./src/List/List"
import Details from "./src/Details/Details"

const Stack = createStackNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "List">
        <Stack.Screen
        name = "List"
        component = {List}
        options = {{headerShown: false}}
        />
        <Stack.Screen
        name = "Details"
        component = {Details}
        options = {{headerShown: false}}
        />

      </Stack.Navigator>

    </NavigationContainer>
   
  )
}

