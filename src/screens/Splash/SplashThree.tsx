import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import images from "@/assets/images";
import { styles } from "./Styles";
import { useNavigation } from "@react-navigation/native";
import UpperBar from "@/components/UpperBar";

const SplashThree = ({ navigation }) => {
  //const { navigate } = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("SplashFour");
    }, 2000);
  }, []);
  return (
    <View style={styles.splashThreeContainer}>
      <UpperBar />
      <Image source={images.shippex} style={styles.splashThreeImage} />
    </View>
  );
};

export default SplashThree;
