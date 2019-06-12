import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CampaignScreen from "../screens/CampaignScreen";
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Campaign: CampaignScreen
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(TabNavigator);
