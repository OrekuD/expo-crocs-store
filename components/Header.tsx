import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <MaterialCommunityIcons name="chevron-left" color="#000" size={34} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
