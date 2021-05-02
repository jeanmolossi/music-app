import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { HomePageFactory } from "@/main/factory/pages";
import { PlayerControlsProvider } from "@/presentation/components";

interface MainRoutesProps {}

const { Screen, Navigator } = createStackNavigator();

export const MainRoutes = ({}: MainRoutesProps) => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <PlayerControlsProvider>
      <NavigationContainer>
        <Navigator {...{ screenOptions }}>
          <Screen name="home" component={HomePageFactory} />
        </Navigator>
      </NavigationContainer>
    </PlayerControlsProvider>
  );
};
