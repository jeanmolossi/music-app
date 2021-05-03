import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { HomePageFactory } from "@/main/factories/pages";
import { PlayerProviderFactory } from "@/main/factories/contexts";

interface MainRoutesProps {}

const { Screen, Navigator } = createStackNavigator();

export const MainRoutes = ({}: MainRoutesProps) => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <PlayerProviderFactory>
      <NavigationContainer>
        <Navigator {...{ screenOptions }}>
          <Screen name="home" component={HomePageFactory} />
        </Navigator>
      </NavigationContainer>
    </PlayerProviderFactory>
  );
};
