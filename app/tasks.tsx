import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page des tâches (non utilisée)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 14,
    color: "#7f8c8d",
  },
});
