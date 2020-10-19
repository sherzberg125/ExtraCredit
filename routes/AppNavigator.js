import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Calculator from "../screens/calculator";
import Map from "../screens/map"
import FlappyBird from '../screens/flappyBird'

const Stack = createStackNavigator();


const AppNavigator = () => (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name = "Map" component= {Map} />
        <Stack.Screen name = 'Flappy Bird' component = {FlappyBird} />
      </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
