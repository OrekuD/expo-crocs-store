import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { pink, green, pink2 } from "../constants/Colors";
import { Header } from "../components";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";

const IMAGE_CONTAINER_SIZE = 70;
const CIRCLE_SIZE = 350;

const images = [
  { id: "0", image: require("../assets/images/2.jpg") },
  { id: "1", image: require("../assets/images/3.jpg") },
  { id: "2", image: require("../assets/images/4.jpg") },
];

const ProductScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Product">) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginRight: 20 }}>
          <Header />
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.title}>Classic Clog</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>New</Text>
            </View>
          </View>
          <Text style={styles.priceText}>$32.99</Text>
          <View style={styles.images}>
            <View style={styles.left}>
              {images.map(({ image, id }) => (
                <View key={id} style={styles.imageContainer}>
                  <Image
                    source={image}
                    resizeMode="contain"
                    style={{ width: "75%", height: "75%" }}
                  />
                </View>
              ))}
            </View>
            <View style={styles.right}>
              <View style={styles.circle} />
              <Image
                source={require("../assets/images/1.png")}
                style={{
                  width: "85%",
                  transform: [{ rotate: "-10deg" }, { translateY: 40 }],
                  alignSelf: "flex-end",
                  marginRight: -30,
                }}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.overviewText}>Overview</Text>
          <Text style={styles.descriptionText}>
            Nulla deserunt veniam elit anim in velit amet enim veniam sint
            veniam sit. Excepteur ipsum sint aliquip in proident laborum ea sint
            veniam consectetur minim fugiat. Non ut velit amet non dolore ipsum
            incididunt aliquip ea. Nisi aute proident nostrud ullamco in velit
            ipsum magna velit amet laboris officia adipisicing cillum. Commodo
            cupidatat ut nostrud amet consectetur occaecat adipisicing aliquip
            ipsum minim et Lorem irure. Dolor in elit ut pariatur esse aliquip.
            Duis culpa est exercitation sunt est officia ad et pariatur mollit.
            Ut ullamco dolore Lorem Lorem qui consectetur aute occaecat
            incididunt do ullamco pariatur.
          </Text>
        </View>
      </ScrollView>
      <LinearGradient
        colors={["transparent", pink, pink, pink, pink2]}
        style={styles.bottomTab}
      >
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>add to cart</Text>
        </RectButton>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="md-heart-empty" color="#fff" size={30} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pink,
    paddingLeft: 20,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginRight: 10,
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
    fontSize: 12,
    color: "#fff",
    textTransform: "uppercase",
  },
  priceText: {
    marginVertical: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  images: {
    height: 300,
    width: "100%",
    // backgroundColor: green,
    flexDirection: "row",
    paddingTop: 30,
    overflow: "hidden",
  },
  left: {
    height: "100%",
    width: IMAGE_CONTAINER_SIZE + 10,
    justifyContent: "space-between",
  },
  right: {
    flex: 1,
    height: "100%",
    position: "relative",
    // backgroundColor: "yellow",
  },
  imageContainer: {
    width: IMAGE_CONTAINER_SIZE,
    height: IMAGE_CONTAINER_SIZE,
    borderRadius: 15,
    backgroundColor: "#fff",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    position: "absolute",
    right: -140,
    top: -20,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: pink2,
    zIndex: -1,
  },
  bottomTab: {
    width: width,
    height: 140,
    // backgroundColor: "red",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    height: IMAGE_CONTAINER_SIZE,
    width: "70%",
    borderRadius: 15,
    backgroundColor: green,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
  },
  iconButton: {
    width: IMAGE_CONTAINER_SIZE,
    height: IMAGE_CONTAINER_SIZE,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  overviewText: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  descriptionText: {
    width: "95%",
    lineHeight: 30,
    fontSize: 18,
    color: "grey",
  },
});
