import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Product } from "../types";
import { width } from "../constants/Layout";
import { LinearGradient } from "expo-linear-gradient";
import { green, lightgrey } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface SlideProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
  scale: Animated.AnimatedInterpolation;
  item: Product;
}

const SLIDE_WIDTH = width * 0.5;
const SLIDE_HEIGHT = 300;
const SPACER_WIDTH = (width - SLIDE_WIDTH - 40) / 2;

const Slide = ({ navigation, scale, item }: SlideProps) => {
  const { colors, images, imageRotation } = item;
  return (
    <Animated.View
      style={{
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        transform: [{ scale }],
      }}
    >
      <LinearGradient
        colors={colors.reverse()}
        style={{ flex: 1, borderRadius: 20 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Product", { item })}
          style={{ ...styles.slide }}
        >
          <View style={styles.row}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>New</Text>
            </View>
            <Ionicons name="md-heart-empty" color={lightgrey} size={30} />
          </View>
          <Image
            source={images[0].image}
            style={{ ...styles.image, transform: [{ rotate: imageRotation }] }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </LinearGradient>
    </Animated.View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  slide: {
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    padding: 20,
    position: "relative",
  },
  badge: {
    width: 48,
    height: 24,
    borderRadius: 5,
    backgroundColor: green,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 14,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    position: "absolute",
    bottom: -80,
    right: -30,
    width: "140%",
    height: "140%",
  },
});
