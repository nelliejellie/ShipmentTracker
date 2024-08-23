import { View, Text, Image, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { styles } from "./Styles";
import images from "@/assets/images";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const { navigate } = useNavigation();
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigate("SplashTwo");
      }, 500);
    });
  }, [scaleValue, navigate]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("SplashTwo");
  //   }, 2000);
  // }, []);
  return (
    <View style={styles.container}>
      {/* <Image
        source={images.splashimageone}
        style={[styles.splashimage, { transform: [{ scale: scaleValue }] }]}
      /> */}
      <Animated.Image
        source={images.splashimageone} // Ensure this is a valid image source
        style={[
          styles.splashimage,
          { transform: [{ scale: scaleValue }] }, // Apply the animated scale value
        ]}
      />
    </View>
  );
};

export default Splash;
