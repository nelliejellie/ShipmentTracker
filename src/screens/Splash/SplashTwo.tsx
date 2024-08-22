import { View, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./Styles";
import images from "@/assets/images";
import { useNavigation } from "@react-navigation/native";
import UpperBar from "@/components/UpperBar";

const SplashTwo = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate("SplashThree");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={images.splashimageteo} style={styles.splashimagetwo} />
    </View>
  );
};

export default SplashTwo;
