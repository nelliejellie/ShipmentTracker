import { View, Text, Image } from "react-native";
import { styles } from "./Styles";
import React from "react";
import images from "@/assets/images";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={images.man} // Path to your local image
          style={styles.manImage}
        />
        <View>
          <Text style={styles.textHeader}>SHIPPEX</Text>
        </View>
        {/* <Image
          source={images.shippy} // Path to your local image
          style={styles.shippeximage}
          resizeMode="cover"
        /> */}
        <Image
          source={images.bell} // Path to your local image
          style={styles.manImage}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "#757281" }}>Hello,</Text>
        <Text style={styles.nameText}>Ibrahim Shaker</Text>
      </View>
    </View>
  );
};

export default Home;
