import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import images from "@/assets/images";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { ListItemComponentProps } from "@/interfaces";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const ListItem: React.FC<ListItemComponentProps> = ({
  status,
  title,
  from,
  to,
  refno,
}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="checkbox-blank-outline"
        size={24}
        color="#757281"
      />
      <Image source={images.box} style={{ width: 30, height: 30 }} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.refno}>{refno}</Text>
        <View style={styles.routeContainer}>
          <Text style={styles.route}>{from}</Text>
          <FontAwesome6 name="arrow-right-long" size={10} color="#2F50C1" />
          <Text style={styles.route}>{to}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",

          width: 100,
        }}
      >
        {status === "RECIEVED" && (
          <Text style={styles.recievedStatus}>{status}</Text>
        )}
        {status === "CANCELED" && (
          <Text style={styles.canceledStatus}>{status}</Text>
        )}
        {status === "ERROR" && <Text style={styles.errorStatus}>{status}</Text>}
        {status === "New ShipmentTT" && (
          <Text style={styles.deliveredStatus}>{status}</Text>
        )}
      </View>

      <Fontisto name="arrow-resize" size={20} color="#2F50C1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 67,
    backgroundColor: "#F4F2F8",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  routeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 3,
  },
  title: {
    fontSize: 16,
  },
  refno: {
    fontSize: 16,
    fontWeight: "bold",
  },
  route: {
    fontSize: 10,
  },
  recievedStatus: {
    backgroundColor: "#d9e6fd",
    color: "#4463c8",
    padding: 3,
    borderRadius: 4,
    textAlign: "left",
  },
  canceledStatus: {
    color: "#e0dee7",
    textAlign: "left",
  },
  errorStatus: {
    color: "#993037",
    backgroundColor: "#b29f95",
    padding: 3,
    borderRadius: 4,
    textAlign: "left",
  },
  deliveredStatus: {
    color: "#5A8959",
    backgroundColor: "#9FAF96",
    padding: 3,
    borderRadius: 4,
    textAlign: "center",
  },
});
export default ListItem;
