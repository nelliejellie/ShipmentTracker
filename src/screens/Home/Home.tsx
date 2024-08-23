import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Styles";
import React, { useState, useEffect } from "react";
import images from "@/assets/images";
import SearchContainer from "@/components/SearchContainer";
import IconButton from "@/components/IconButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ListItem from "@/components/ListItem";
import { useGetShipments } from "@/Networking/hooks/useGetShipments";

const Home = () => {
  const [textSearch, setTextSearch] = useState("");
  const { getShipments } = useGetShipments();
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
  const [data, setData] = useState([
    {
      from: "Cairo",
      to: "Alexandria",
      status: "DELIVERED",
      title: "AWB",
      refno: "123453636",
    },
    {
      from: "New York",
      to: "Los Angeles",
      status: "RECIEVED",
      title: "AWB",
      refno: "987654321",
    },
    // Add more data items as needed
  ]);
  useEffect(() => {
    getData();
  }, []);
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
      <SearchContainer text={textSearch} setText={setTextSearch} />
      <View style={styles.iconButtonContainer}>
        <IconButton
          title="Filters"
          iconName="Filter"
          backgroundColor="#F4F2F8"
          color=""
          onPress={() => {}}
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
          data={data}
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
