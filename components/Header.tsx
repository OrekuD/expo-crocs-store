import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface HeaderProps {}

const DOT_SIZE = 6;

const Header = (props: HeaderProps) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <MaterialCommunityIcons name="chevron-left" color="#121212" size={34} />
      <View style={styles.menuIcon}>
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuIcon: {
    height: 20,
    justifyContent: "space-between",
    marginRight: 10,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: "#121212",
  },
});
