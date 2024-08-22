import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { ButtonComponentProps } from "@/interfaces";

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  onPress,
  backgroundColor = "#fff",
  color = "#2F50C1",
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      {loading === false ? (
        <Text style={{ color }}>{title}</Text>
      ) : (
        <ActivityIndicator color={"#fff"} size={"small"} />
      )}
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
