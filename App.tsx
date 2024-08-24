import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import StackNavigator from "@/Navigation/StackNavigator";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigator />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
