import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import HomeScreen from './Screens/HomeScreen';
import RestaurantScreen from './Screens/RestaurantScreen';
import tw from 'twrnc'
import store from './store'
import { Provider } from 'react-redux'
import BasketScreen from './Screens/BasketScreen';

const Stack = createNativeStackNavigator();
// NativeWindStyleSheet.setOutput({   web: "native",   default: "native", });
export default function App() {
  
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} 
          options = {{presentation: 'modal', headerShown: true}}/>
        </Stack.Navigator>
     </Provider>
    </NavigationContainer>
  );
}


