import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { SearchComponentProps } from "@/interfaces";

const SearchContainer: React.FC<SearchComponentProps> = ({ text, setText }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="#757281" />
      <TextInput
        placeholder="Search"
        value={text}
        onChangeText={(text) => setText(text)}
        style={[styles.input]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 44,
    backgroundColor: "#F4F2F8",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 55,
    fontSize: 16,
    color: "#2F50C1",
    borderRadius: 5,
    paddingLeft: 10,
  },
  inputFocused: {
    borderColor: "#2F50C1", // Change border color to blue when focused
    borderWidth: 1,
  },
  prefix: {
    fontSize: 16,
    color: "#000",
    paddingRight: 5, // Add some space between the prefix and the input text
  },
});
export default SearchContainer;
