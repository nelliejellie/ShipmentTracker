import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    textAlign: "center",
    color: "#2F50C1",
    fontSize: 18,
    fontWeight: "bold",
  },
  manImage: {
    width: 40,
    height: 40,
  },
  shippeximage: {
    width: 250,
    height: 40,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  iconButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shipmentTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  markContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  textContainer: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
