// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { Home, Article } from "../screens/index";

// const Stack = createNativeStackNavigator();

// export default function Screen() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />

//         <Stack.Screen
//           name="Articles"
//           component={Article}
//           options={{ title: ("navigation.articles") }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles,  Home, } from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      

     
    </Stack.Navigator>
  );
};
