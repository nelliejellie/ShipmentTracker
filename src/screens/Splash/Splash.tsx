import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./Styles";
import images from "@/assets/images";
import { useNavigation } from "@react-navigation/native";
import UpperBar from "@/components/UpperBar";

const Splash = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate("SplashTwo");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={images.splashimageone} // Path to your local image
        style={styles.splashimage}
      />
    </View>
  );
};

export default Splash;
