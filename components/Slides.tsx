import React, { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Sidebar from "./Sidebar";
import { StackNavigationProp } from "@react-navigation/stack";
import { width } from "../constants/Layout";
import { RootStackParamList } from "../types";
import { products } from "../data/products";
import Slide from "./Slide";

interface SlidesProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}
const slides = [
  { key: "10" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { key: "5" },
];
const SLIDE_WIDTH = width * 0.5;
const SLIDE_HEIGHT = 300;
const SPACER_WIDTH = (width - SLIDE_WIDTH - 40) / 2;

const Slides = ({ navigation }: SlidesProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.slides}>
      <Sidebar />
      <Animated.FlatList
        data={[{ key: "10" }, ...products, { key: "11" }]}
        keyExtractor={() => Math.random().toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        decelerationRate="fast"
        snapToInterval={SLIDE_WIDTH}
        snapToAlignment="center"
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * SLIDE_WIDTH,
            (index - 1) * SLIDE_WIDTH,
            index * SLIDE_WIDTH,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          });
          if (item.key) {
            return <View style={{ width: SPACER_WIDTH }} />;
          } else {
            return <Slide {...{ navigation, scale, item }} />;
          }
        }}
      />
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  slides: {
    position: "relative",
    height: width * 0.75,
    marginTop: 25,
  },
});
