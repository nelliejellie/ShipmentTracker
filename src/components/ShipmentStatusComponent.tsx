import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const ShipmentStatusComponent = ({ text }: any) => {
  const [glowButton, setGlowButton] = useState(false);
  return (
    <TouchableOpacity
      style={glowButton ? styles.glow : styles.normal}
      onPress={() => {
        setGlowButton(!glowButton);
      }}
    >
      <Text style={glowButton ? styles.textGlow : styles.textNormal}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  glow: {
    height: 40,
    width: 90,
    borderWidth: 1,
    borderColor: "#2F50C1",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  normal: {
    backgroundColor: "#F4F2F8",
    borderRadius: 5,
    width: 90,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textGlow: {
    color: "#2F50C1",
    textAlign: "center",
  },
  textNormal: {
    color: "#9c99aa",
    textAlign: "center",
  },
});

export default ShipmentStatusComponent;
