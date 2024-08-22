import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./Styles";
import images from "@/assets/images";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "@/components/Auth/ButtonComponent";
import Back from "@/assets/icons/Back";
import Input from "@/components/Auth/Input";

const SplashFour = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState("https://");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleNavigation = () => {
    setModalVisible(true);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#2F50C1" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setModalVisible(false)}
            >
              <Back />
              <Text style={{ color: "#2F50C1" }}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>Login</Text>
            <Text style={styles.modalText}>
              Please enter your First, Last name and your phone number in order
              to register!
            </Text>
            <Input label="Url" value={url} onChangeText={setUrl} />
            <Input
              label="UserName"
              value={username}
              onChangeText={setUsername}
            />
            <View style={{ flex: 1 }}>
              <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.buttonContainerTwo}>
              <ButtonComponent
                title="Login"
                onPress={handleNavigation}
                backgroundColor="#2F50C1"
                color="#fff"
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.splashThreeContainer}>
        <Image
          source={images.shippex} // Path to your local image
          style={styles.splashThreeImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent title="Login" onPress={handleNavigation} />
      </View>
    </View>
  );
};

export default SplashFour;
