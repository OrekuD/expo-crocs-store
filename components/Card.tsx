import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Product, RootStackParamList } from "../types";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { green } from "../constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";

interface CardProps {
  item: Product;
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

const Card = ({ item, navigation }: CardProps) => {
  const { colors, name, rating, price, images, imageRotation } = item;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Product", { item })}
      style={styles.container}
    >
      <LinearGradient colors={colors} style={styles.image}>
        <Image
          source={images[0].image}
          style={{
            height: "100%",
            width: "100%",
            transform: [{ translateX: 4 }, { rotate: imageRotation }],
          }}
          resizeMode="contain"
        />
      </LinearGradient>
      <View style={styles.content}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.row}>
          <FontAwesome name="star" color={green} size={14} />
          <Text style={{ ...styles.text, marginLeft: 10, marginBottom: 2 }}>
            {rating}
          </Text>
        </View>
      </View>
      <Text style={{ ...styles.text }}>${price}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 60,
    // backgroundColor: "red",
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    height: "100%",
    marginLeft: 30,
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
