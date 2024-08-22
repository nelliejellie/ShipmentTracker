import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "@/screens/Splash/Splash";
import SplashFour from "@/screens/Splash/SplashFour";
import SplashThree from "@/screens/Splash/SplashThree";
import SplashTwo from "@/screens/Splash/SplashTwo";
import React from "react";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
