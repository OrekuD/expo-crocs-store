import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { width } from "../constants/Layout";
import { green, lightgrey } from "../constants/Colors";

interface SidebarProps {}

const types = [
  { id: "0", name: "Clogs" },
  { id: "1", name: "Boots" },
  { id: "2", name: "Loafers" },
];

const SIDEBAR_WIDTH = width * 0.65;
const SIDEBAR_HEIGHT = 85;

const Sidebar = (props: SidebarProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <View style={styles.container}>
      {types.map(({ name }, index) => {
        if (index === activeIndex) {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setActiveIndex(index)}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={{ ...styles.text }}>{name}</Text>
              <View style={styles.activeDot} />
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setActiveIndex(index)}
            >
              <Text
                style={{ ...styles.text, color: lightgrey, marginBottom: 10 }}
              >
                {name}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    width: SIDEBAR_WIDTH,
    height: SIDEBAR_HEIGHT,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    zIndex: 10,
    paddingRight: 40,
    transform: [
      { translateX: -SIDEBAR_WIDTH / 2 },
      { translateY: -SIDEBAR_HEIGHT / 2 },
      { rotateZ: "-90deg" },
      { translateX: SIDEBAR_WIDTH / 2 - 70 },
      { translateY: SIDEBAR_HEIGHT / 2 },
    ],
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: green,
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
