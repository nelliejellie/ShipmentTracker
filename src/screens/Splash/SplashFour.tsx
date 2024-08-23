import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./Styles";
import images from "@/assets/images";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "@/components/Auth/ButtonComponent";
import Back from "@/assets/icons/Back";
import Input from "@/components/Auth/Input";
import Toast from "react-native-toast-message";
import { UseloginHook } from "@/Networking/hooks/useLoginHook";
import { ScrollView } from "react-native-gesture-handler";

const SplashFour = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { postLogin } = UseloginHook();
  const [url, setUrl] = useState("https://");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [urlError, setUrlError] = useState(true);
  const [usernameError, setUsernameError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const handleNavigation = () => {
    setModalVisible(true);
  };

  const handleInputChange = (type: string, value: string) => {
    switch (type) {
      case "url":
        setUrl(value);
        setUrlError(value.trim() === "");
        break;
      case "username":
        setUsername(value);
        setUsernameError(value.trim() === "");
        break;
      case "password":
        setPassword(value);
        setPasswordError(value.trim() === "");
        break;
      default:
        break;
    }
    setUrlError(url.trim() === "");
    setUsernameError(username.trim() === "");
    setPasswordError(password.trim() === "");

    setError(urlError || usernameError || passwordError);
  };
  const handleLogin = async () => {
    try {
      setLoading(true);
      const payload = {
        usr: username,
        pwd: password,
      };
      const res = await postLogin(payload);
      if (res.message === "Logged In") {
        navigation.replace("Tabs");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Hello",
        text2: "An error occurred. Please try again later",
      });
    } finally {
      setLoading(false);
    }
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
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.modalView}
          >
            <ScrollView>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Back />
                  <Text style={{ color: "#2F50C1" }}>Cancel</Text>
                </TouchableOpacity>

                <Text style={styles.headerText}>Login</Text>
                <Text style={styles.modalText}>
                  Please enter your First, Last name and your phone number in
                  order to register!
                </Text>
                <Toast />
                <Input
                  label="URL"
                  value={url}
                  onChangeText={(text: string) =>
                    handleInputChange("url", text)
                  }
                />
                <Input
                  label="Username / Email"
                  value={username}
                  onChangeText={(text: string) =>
                    handleInputChange("username", text)
                  }
                />
                <Input
                  label="Password"
                  value={password}
                  onChangeText={(text: string) =>
                    handleInputChange("password", text)
                  }
                  secureTextEntry={true}
                />
              </View>

              <View style={[styles.buttonContainerTwo]}>
                {error ? (
                  <ButtonComponent
                    title="Login"
                    onPress={() => {}}
                    backgroundColor="#EAE7F2"
                    color="#fff"
                    loading={false}
                  />
                ) : (
                  <ButtonComponent
                    title="Login"
                    onPress={handleLogin}
                    backgroundColor="#2F50C1"
                    color="#fff"
                    loading={loading}
                  />
                )}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
      <View style={styles.splashThreeContainer}>
        <Image
          source={images.shippex} // Path to your local image
          style={styles.splashThreeImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          title="Login"
          onPress={handleNavigation}
          loading={false}
        />
      </View>
    </View>
  );
};

export default SplashFour;
