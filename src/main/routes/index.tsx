import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { HomePageFactory } from "../factory/pages";

interface MainRoutesProps {}

const { Screen, Navigator } = createStackNavigator();

export const MainRoutes = ({}: MainRoutesProps) => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Navigator {...{ screenOptions }}>
        <Screen name="home" component={HomePageFactory} />
      </Navigator>
    </NavigationContainer>
  );
};
