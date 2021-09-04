import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ManageFleetScreen from "../screens/ManageFleetScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import HistoryScreen from "../screens/HistoryScreen";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";

const defaultNavOptions = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#1ac0cb",
  },
  headerTitleStyle: {
    fontFamily: "Helvetica-Neue-Medium"
  },
  headerTintColor: "white",
}

// STACK NAVIGATORS
const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: "Home",
      safeAreaInsets: {top : 50}
    }
  }
}, {
  defaultNavigationOptions: defaultNavOptions
});

const FleetStackNavigator = createStackNavigator({
  Fleet: {
    screen: ManageFleetScreen,
    navigationOptions: {
      headerTitle: "Manage Fleet",
      safeAreaInsets: {top : 50}
    }
  }
}, {
  defaultNavigationOptions: defaultNavOptions
});

const StatisticsStackNavigator = createStackNavigator({
  Home: {
    screen: StatisticsScreen,
    navigationOptions: {
      headerTitle: "Statistics",
      safeAreaInsets: {top : 50}
    }
  }
}, {
  defaultNavigationOptions: defaultNavOptions
});

const HistoryStackNavigator = createStackNavigator({
  Home: {
    screen: HistoryScreen,
    navigationOptions: {
      headerTitle: "History",
      safeAreaInsets: {top : 50}
    }
  }
}, {
  defaultNavigationOptions: defaultNavOptions
});

const AccountSettingsStackNavigator = createStackNavigator({
  AccountSettings: {
    screen: AccountSettingsScreen,
    navigationOptions: {
      headerTitle: "Account Settings",
      safeAreaInsets: {top : 50}
    }
  }
}, {
  defaultNavigationOptions: defaultNavOptions
});


// BOTTOM TAB NAVIGATION CONFIG
const tabScreenConfig = {
  Home: {
    screen: HomeStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons 
            name="ios-home"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    }
  },
  Fleet: {
    screen: FleetStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <MaterialCommunityIcons
            name="truck"
            size={30}
            color={tabInfo.tintColor}
            style={{
              height: 30, 
              width: 30
            }}
          />
        );
      }
    }
  },
  Statistics: {
    screen: StatisticsStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons 
            name="stats-chart"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      }
    }
  },
  History: {
    screen: HistoryStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <MaterialCommunityIcons 
            name="history"
            size={29}
            color={tabInfo.tintColor}
            style={{
              height: 29, 
              width: 29,
            }}
          />
        );
      }
    }
  },
  Account: {
    screen: AccountSettingsStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return(
          <FontAwesome5 
            name="user-circle"
            size={25}
            color={tabInfo.tintColor}
            style={{
              height: 28,
              width: 25
            }}
          />
        );
      }
    }
  }
}

const BottomTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: "#23B6D0",
  inactiveColor: "#999999",
  barStyle: {
    backgroundColor: "#FFF"
  },
  labeled: true,
  fontFamily: "Helvetica-Neue-Medium",
});

const MainNavigator = createStackNavigator({
  LogIn: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  AppProper: {
    screen: BottomTabNavigator,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default createAppContainer(MainNavigator);