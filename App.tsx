import "react-native-gesture-handler";
import React from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { MainRoutes } from "./src/main/routes";
import { Theme } from "./src/presentation/styles";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_Regular: Poppins_400Regular,
    Poppins_Medium: Poppins_500Medium,
    Poppins_Bold: Poppins_700Bold,
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          {
            flex: 1,
            backgroundColor: Theme.backgroundMainColor,
          },
          fontsLoaded
            ? null
            : { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <StatusBar
          style="light"
          backgroundColor={Theme.backgroundMainColor}
          translucent
        />
        {fontsLoaded ? (
          <MainRoutes />
        ) : (
          <ActivityIndicator size={56} color="white" />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
