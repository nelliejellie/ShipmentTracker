import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Text, Animated, StyleSheet } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  style,
  secureTextEntry = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: "absolute",
    left: 5,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 6],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ["#aaa", "#000"],
    }),
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[styles.input, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginVertical: 10,
  },
  input: {
    height: 55,
    fontSize: 16,
    color: "#000",
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

export default Input;
