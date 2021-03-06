import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GeoLocation from "./src/screens/GeoLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <GeoLocation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
