import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { HomeScreen, ProductScreen } from "../screens";

const Stack = createStackNavigator<RootStackParamList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
