import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";

const UpperBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#2F50C1" // Works on Android
        barStyle="light-content" // Light text/icons for better contrast
      />
      {/* Your component content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F50C1",
  },
});

export default UpperBar;
