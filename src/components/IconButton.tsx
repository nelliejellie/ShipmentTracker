import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { IconButtonComponentProps } from "@/interfaces";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const IconButton: React.FC<IconButtonComponentProps> = ({
  title,
  onPress,
  backgroundColor,
  iconName,
  color,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      {iconName === "Filter" && (
        <Ionicons name="filter" size={24} color="black" />
      )}
      {iconName === "Scan" && (
        <MaterialCommunityIcons name="line-scan" size={24} color="#fff" />
      )}
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 44,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});
export default IconButton;
