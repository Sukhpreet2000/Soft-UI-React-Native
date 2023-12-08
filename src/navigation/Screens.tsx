import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Home, Article } from "../screens/index";

const Stack = createNativeStackNavigator();

export default function Screen () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={Home}
            />

            <Stack.Screen
            name="Articles"
            component={Article}
            />
        </Stack.Navigator>
      </NavigationContainer>  
    )
}