import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import { Feed } from "../screens/Feed";
import { Profile } from "../screens/Profile";
import { Ranking } from "../screens/Ranking";
import { useTheme } from "styled-components";

import { About } from "../screens/About";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.shape,
        style: {
          backgroundColor: theme.colors.secondary100,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Feed}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="podium" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name={focused ? "questioncircle" : "questioncircleo"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
