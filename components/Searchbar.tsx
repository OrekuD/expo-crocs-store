import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { palewhite, green, lightgrey } from "../constants/Colors";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

interface SearchbarProps {}

const Searchbar = (props: SearchbarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Ionicons
          name="ios-search"
          color={lightgrey}
          size={24}
          style={{ marginHorizontal: 10 }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor={lightgrey}
        />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <View style={styles.filterIcon}>
          <View style={styles.line}>
            <View style={styles.dot} />
          </View>
          <View style={styles.line}>
            <View style={{ ...styles.dot, top: 3 }} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInputContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: palewhite,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: "100%",
    fontSize: 18,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: green,
    alignItems: "center",
    justifyContent: "center",
  },
  filterIcon: {
    width: "50%",
    height: "50%",
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  line: {
    width: StyleSheet.hairlineWidth * 2.5,
    height: "60%",
    backgroundColor: "#fff",
    position: "relative",
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 3,
    left: -2.5,
  },
});
