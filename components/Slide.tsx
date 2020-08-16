import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Product } from "../types";
import { width } from "../constants/Layout";
import { LinearGradient } from "expo-linear-gradient";

interface SlideProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
  scale: Animated.AnimatedInterpolation;
  item: Product;
}

const SLIDE_WIDTH = width * 0.5;
const SLIDE_HEIGHT = 300;
const SPACER_WIDTH = (width - SLIDE_WIDTH - 40) / 2;

const Slide = ({ navigation, scale, item }: SlideProps) => {
  const { colors, images } = item;
  return (
    <Animated.View style={{ ...styles.slide, transform: [{ scale }] }}>
      <LinearGradient
        colors={colors.reverse()}
        style={{ flex: 1, borderRadius: 20 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Product", { item })}
          style={{ flex: 1 }}
        ></TouchableOpacity>
      </LinearGradient>
    </Animated.View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  slide: {
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    borderRadius: 20,
  },
});
