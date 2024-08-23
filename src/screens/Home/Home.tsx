import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { styles } from "./Styles";
import React, { useState, useEffect } from "react";
import images from "@/assets/images";
import SearchContainer from "@/components/SearchContainer";
import IconButton from "@/components/IconButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ListItem from "@/components/ListItem";
import { useGetShipments } from "@/Networking/hooks/useGetShipments";
import ShipmentStatusComponent from "@/components/ShipmentStatusComponent";

const Home = () => {
  const [textSearch, setTextSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { getShipments } = useGetShipments();
  const [data, setData] = useState([]);

  const filteredData = data.filter(
    (item) =>
      item.from.toLowerCase().includes(textSearch.toLowerCase()) ||
      item.to.toLowerCase().includes(textSearch.toLowerCase()) ||
      item.status.toLowerCase().includes(textSearch.toLowerCase()) ||
      item.refno.toLowerCase().includes(textSearch.toLowerCase())
  );

  const getData = async () => {
    const payload = {
      doctype: "AWB",
      fields: '["*"]',
    };
    const res = await getShipments(payload);
    const newData = res.message.map((data) => ({
      from: data.origin_city || "Unknown",
      to: data.destination_city || "Unknown",
      status: data.status || "Unknown",
      title: "AWB",
      refno: data.name || "N/A",
    }));
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide" // Can be "slide", "fade", or "none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalView}>
            <View style={styles.headerModal}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: "#2F50C1", fontSize: 16 }}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.modalText}>Filters</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: "#2F50C1", fontSize: 16 }}>Done</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.shipmentstatusText}>SHIPMENT STATUS</Text>
            <View style={styles.shipmentstatuscontainer}>
              <ShipmentStatusComponent text="Received" />
              <ShipmentStatusComponent text="Putaway" />
              <ShipmentStatusComponent text="Delivered" />
              <ShipmentStatusComponent text="Canceled" />
              <ShipmentStatusComponent text="Rejected" />
              <ShipmentStatusComponent text="Lost" />
              <ShipmentStatusComponent text="On-hold" />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
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
      <SearchContainer text={textSearch} setText={setTextSearch} />
      <View style={styles.iconButtonContainer}>
        <IconButton
          title="Filters"
          iconName="Filter"
          backgroundColor="#F4F2F8"
          color=""
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <IconButton
          title="Add Scan"
          iconName="Scan"
          backgroundColor="#2F50C1"
          color="#fff"
          onPress={() => {}}
        />
      </View>
      <View style={styles.shipmentTextContainer}>
        <Text style={styles.textContainer}>Shipments</Text>
        <View style={styles.markContainer}>
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={24}
            color="#757281"
          />
          <Text>Mark All</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.refno}
          renderItem={({ item }) => (
            <ListItem
              from={item.from}
              to={item.to}
              status={item.status}
              title={item.title}
              refno={item.refno}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;
