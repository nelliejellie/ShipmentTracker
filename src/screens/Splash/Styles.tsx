import { StyleSheet, Dimensions, Platform } from "react-native";

const { height: screenHeight } = Dimensions.get("window");
const containerHeightAndroid = screenHeight * 0.4;
const containerHeightIOS = screenHeight * 0.25;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashimage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  splashimagetwo: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  splashThreeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F50C1",
  },
  splashThreeImage: {
    width: "60%",
    height: 40,
    margin: 10,
  },
  buttonContainer: {
    backgroundColor: "#2F50C1",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  buttonContainerTwo: {
    flex: 1,
    height: Platform.OS === "ios" ? containerHeightIOS : containerHeightAndroid,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalView: {
    flex: 1,
    marginTop: 20,
    paddingTop: 10,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "blue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    color: "#757281",
    marginTop: 10,
    marginLeft: 5,
  },
  backButton: {
    flexDirection: "row",
    gap: 10,
    marginRight: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    marginLeft: 5,
  },
});
