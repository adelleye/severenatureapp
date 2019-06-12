import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  TabBarBottom
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CampaignScreen from "../screens/CampaignScreen";
import ShopScreen from "../screens/ShopScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import { Icon } from "expo";
import SelectedBlogScreen from "../screens/SelectedBlogScreen";
import { withTheme } from "styled-components";

const activeColor = "#1D1D26";
const inactiveColor = "#9E9E9E";
//Create stack
//HOME
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Campaign: CampaignScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-home"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

//CAMPAIGN
const CampaignStack = createStackNavigator({
  Campaign: CampaignScreen
});

CampaignStack.navigationOptions = {
  tabBarLabel: "Campaign",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-images"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

//SHOP
const ShopStack = createStackNavigator({
  Shop: ShopScreen
});
ShopStack.navigationOptions = {
  tabBarLabel: "Shop",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-pricetags"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

//DISCOVER
const DiscoverStack = createStackNavigator(
  {
    Discover: DiscoverScreen,
    SelectedBlog: SelectedBlogScreen
  },
  {
    mode: "modal"
  }
);

DiscoverStack.navigationOptions = {
  tabBarLabel: "Discover",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-pulse"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

//Put all the stacks together in the bottom navigation
const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    CampaignStack,
    ShopStack,
    DiscoverStack
  },
  {
    tabBarOptions: {
      activeTintColor: "#1D1D26",
      inactiveTintColor: "#9E9E9E"
    }
  }
);
/*
tabBarOptions : {
  showLabel: false, // hide labels
  activeTintColor: "White", // active icon color
  inactiveTintColor: "#586589", // inactive icon color
  style: {
    backgroundColor: "#171F33" // TabBar background
  }
};*/

export default TabNavigator;
