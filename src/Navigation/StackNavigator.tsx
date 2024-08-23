import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from "@/screens/Splash/Splash";
import SplashFour from "@/screens/Splash/SplashFour";
import SplashThree from "@/screens/Splash/SplashThree";
import SplashTwo from "@/screens/Splash/SplashTwo";
import React from "react";
import Home from "@/screens/Home/Home";
import ScanScreen from "@/screens/Home/ScanScreen";
import WalletScreen from "@/screens/Home/WalletScreen";
import ProfileScreen from "@/screens/Home/ProfileScreen";
import { styles } from "./Styles";
import { View, Text, Image } from "react-native";
import images from "@/assets/images";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const RenderBottomTab = ({ focused, name, icon, activeIcon }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={focused ? activeIcon : icon} style={styles.icon} />
      </View>
      <Text
        style={[styles.tabLabel, { color: focused ? "#2F50C1" : "#757281" }]}
      >
        {name}
      </Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 55,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderBottomTab
              focused={focused}
              name="Home"
              activeIcon={images.shipments}
              icon={images.shipments}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderBottomTab
              focused={focused}
              name="Home"
              activeIcon={images.scan}
              icon={images.scan}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderBottomTab
              focused={focused}
              name="Home"
              activeIcon={images.wallet}
              icon={images.wallet}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderBottomTab
              focused={focused}
              name="Home"
              activeIcon={images.profile}
              icon={images.profile}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashTwo"
          component={SplashTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashThree"
          component={SplashThree}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashFour"
          component={SplashFour}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
