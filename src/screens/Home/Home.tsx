import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  RefreshControl,
} from "react-native";
import { styles } from "./Styles";
import React, { useState, useEffect, useCallback } from "react";
import images from "@/assets/images";
import SearchContainer from "@/components/SearchContainer";
import IconButton from "@/components/IconButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ListItem from "@/components/ListItem";
import { useGetShipments } from "@/Networking/hooks/useGetShipments";
import ShipmentStatusComponent from "@/components/ShipmentStatusComponent";
import Toast from "react-native-toast-message";
import ShippexLogo from "@/components/ShippexLogo";

const Home = () => {
  const [textSearch, setTextSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerms, setSearchTerms] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [marker, setMarker] = useState("checkbox-blank-outline");
  const { getShipments } = useGetShipments();
  const [data, setData] = useState([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
  }, []);

  const handleStatusClick = (text: string) => {
    setSearchTerms((prevTerms) => {
      // If the term already exists, don't add it again (optional)
      if (!prevTerms.includes(text)) {
        return [...prevTerms, text];
      }
      return prevTerms;
    });
  };

  const filteredData = data.filter(
    (item) =>
      item.from.toLowerCase().includes(textSearch.toLowerCase()) ||
      item.to.toLowerCase().includes(textSearch.toLowerCase()) ||
      item.status.toLowerCase().includes(textSearch.toLowerCase()) ||
      item.refno.toLowerCase().includes(textSearch.toLowerCase())
  );

  const getData = async () => {
    try {
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
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Hello",
        text2: "An error occurred. Please try again later",
      });
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
                <TouchableOpacity
                  onPress={() => {
                    const d = data.filter((item) =>
                      searchTerms.some((keyword) =>
                        item.status.toLowerCase().includes(keyword)
                      )
                    );
                    setData(d);
                    setModalVisible(false);
                  }}
                >
                  <Text style={{ color: "#2F50C1", fontSize: 16 }}>Done</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.shipmentstatusText}>SHIPMENT STATUS</Text>
              <View style={styles.shipmentstatuscontainer}>
                <ShipmentStatusComponent
                  text="Received"
                  handlePress={() => handleStatusClick("Received")}
                />
                <ShipmentStatusComponent
                  text="Putaway"
                  handlePress={() => handleStatusClick("Putaway")}
                />
                <ShipmentStatusComponent
                  text="Delivered"
                  handlePress={() => handleStatusClick("Delivered")}
                />
                <ShipmentStatusComponent
                  text="Canceled"
                  handlePress={() => handleStatusClick("Canceled")}
                />
                <ShipmentStatusComponent
                  text="Rejected"
                  handlePress={() => handleStatusClick("Rejected")}
                />
                <ShipmentStatusComponent
                  text="Lost"
                  handlePress={() => handleStatusClick("Lost")}
                />
                <ShipmentStatusComponent
                  text="On-hold"
                  handlePress={() => handleStatusClick("On-hold")}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        <View style={styles.header}>
          <Image
            source={images.man} // Path to your local image
            style={styles.manImage}
          />
          <ShippexLogo />
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
          <TouchableOpacity
            style={styles.markContainer}
            onPress={() => {
              if (marker === "checkbox-blank-outline") {
                setMarker("checkbox-marked");
              } else {
                setMarker("checkbox-blank-outline");
              }
            }}
          >
            <MaterialCommunityIcons name={marker} size={24} color="#757281" />
            <Text style={{ color: "#2F50C1" }}>Mark All</Text>
          </TouchableOpacity>
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
                marker={marker}
              />
            )}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={["#9Bd35A", "#689F38"]} // Optional: set the colors of the refresh control
              />
            }
            ListEmptyComponent={
              <TouchableOpacity
                onPress={() => {
                  getData();
                }}
                style={styles.emptyListContainer}
              >
                <Text style={styles.emptyListText}>
                  No items available. Tap to reload.
                </Text>
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
