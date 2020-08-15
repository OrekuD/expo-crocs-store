import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";
import { ProductScreen } from "./screens";

export default function App() {
  return (
    <SafeAreaProvider>
      <ProductScreen />
    </SafeAreaProvider>
  );
}
