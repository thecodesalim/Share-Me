import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Profile from "./Profile";
window.navigator.userAgent = "react-native";
import Friends from "./Friends";
import Map from "./Map";
import { Ionicons } from "@expo/vector-icons";

export const App = props => <createAppContainer />;

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Map") {
    iconName = `ios-map`
  } else if (routeName === "Chat") {
    iconName = `ios-chatbubbles`
  } else if (routeName === "Profile") {
    iconName = `ios-settings`
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator({
  Map: Map,
  Chat: Friends,
  Profile: Profile
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  })
});

export default createAppContainer(TabNavigator);
