import React, { useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Header, Searchbar, Sidebar, Slides, Card } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { palewhite } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { width } from "../constants/Layout";
import { products } from "../data/products";

const tags = ["Crocs", "Summer"];
const slides = [
  { key: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { key: "5" },
];

const HomeScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Home">) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        <Header navigation={navigation} />
      </View>
      <Text style={styles.title}>Women's</Text>
      <Searchbar />
      <View style={styles.row}>
        {tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
            <Ionicons
              name="ios-close"
              color="#121212"
              size={24}
              style={{ marginTop: 3, marginLeft: 10 }}
            />
          </View>
        ))}
      </View>
      <Slides navigation={navigation} />
      <View style={{ marginHorizontal: 20 }}>
        <Text style={styles.popularText}>Popular</Text>
        {[...products].reverse().map((item, index) => (
          <Card item={item} key={index} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    color: "#121212",
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 20,
  },
  tag: {
    height: 50,
    backgroundColor: palewhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  tagText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  popularText: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    marginTop: 20,
  },
});
