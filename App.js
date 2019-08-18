import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, HeaderStyleInterpolator, createStackNavigator, createSwitchNavigator } from "react-navigation";

import Explore from './src/screens/Explore';
import Wishlist from './src/screens/Wishlist';
import Chat from './src/screens/Chat';
import Login from './src/screens/Auth/Login';
import ListItem from "./src/screens/ListItem";
import IklanPage from "./src/screens/IklanPage";
import SignupScreen from "./src/screens/Auth/SignupScreen";
import Detail from "./src/screens/Detail";
import Profil from "./src/screens/Profile";
import ListBook from "./src/screens/listBook";
import ListIklan from "./src/screens/listIklan";
import KontrakSaya from "./src/screens/kontrakSaya";
import Booking from "./src/screens/Booking";
import Filter from "./src/screens/Filter";

<<<<<<< HEAD
console.disableYellowBox = true;
const MainNavBottom = createBottomTabNavigator({
=======








const AuthNavBottom = createBottomTabNavigator({
>>>>>>> update async, usable component
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: {
      tabBarLabel: 'Wishlist',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor} size={24} />
      )
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Login: {
    screen: Profil,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  },
});


const GuestNavBottom = createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: {
      tabBarLabel: 'Wishlist',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor} size={24} />
      )
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-log-in" color={tintColor} size={24} />
      )
    }
  },
});

const guestNav = createStackNavigator(
  {
    Main: {
      screen: GuestNavBottom,
    },
    SignUpModal: {
      screen: SignupScreen,
    },
    LoginModal: {
      screen: Login
    },
    ListItem: {
      screen: ListItem,
    },
    Filter: {
      screen: Filter
    },
    Detail: {
      screen: Detail
    },
    iklanPage: {
      screen: IklanPage
    },
    ListIklanPage: {
      screen: ListIklan
    },
    ListBookPage: {
      screen: ListBook
    },
    kontrakSaya: {
      screen: KontrakSaya
    },
    Booking: {
      screen: Booking
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const authNav = createStackNavigator(
  {
    Main: {
      screen: AuthNavBottom,
    },
    SignUpModal: {
      screen: SignupScreen,
    },
    LoginModal: {
      screen: Login
    },
    ListItem: {
      screen: ListItem,
    },
    Filter: {
      screen: Filter
    },
    Detail: {
      screen: Detail
    },
    iklanPage: {
      screen: IklanPage
    },
    ListIklanPage: {
      screen: ListIklan
    },
    ListBookPage: {
      screen: ListBook
    },
    kontrakSaya: {
      screen: KontrakSaya
    },
    Booking: {
      screen: Booking
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);



const mainNav = createSwitchNavigator({
  // Navigation Guest
  Guest: {
    screen: guestNav
  },
  // Navigation Auth - sudah login
  Auth: {
    screen: authNav
  }
})


export default createAppContainer(mainNav);
