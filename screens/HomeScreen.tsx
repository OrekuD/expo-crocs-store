import React, { useRef } from "react";
import { Text, View, StyleSheet, FlatList, Animated } from "react-native";
import { Header, Searchbar, Sidebar } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { palewhite } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { width } from "../constants/Layout";

const tags = ["Crocs", "Summer"];
const slides = [
  { key: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { key: "5" },
];
const SLIDE_WIDTH = width * 0.5;
const SLIDE_HEIGHT = 300;
const SPACER_WIDTH = (width - SLIDE_WIDTH - 40) / 2;

const HomeScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Home">) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Header />
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
      <View style={styles.slides}>
        <Sidebar />
        <Animated.FlatList
          data={slides}
          keyExtractor={(item) => Math.random().toString()}
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
              return (
                <Animated.View
                  style={{ ...styles.slide, transform: [{ scale }] }}
                />
              );
            }
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
    color: "#121212",
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
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
  slides: {
    position: "relative",
    height: width * 0.7,
    marginTop: 25,
    // backgroundColor: "green",
  },
  slide: {
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    backgroundColor: "red",
  },
});
