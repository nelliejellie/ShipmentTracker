import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { ButtonComponentProps } from "@/interfaces";

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  onPress,
  backgroundColor = "#fff",
  color = "#2F50C1",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={{ color }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 56,
    width: 345,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default ButtonComponent;
