import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, HeaderStyleInterpolator, createStackNavigator } from "react-navigation";

import Explore from './src/screens/Explore';
import Wishlist from './src/screens/Wishlist';
import Chat from './src/screens/Chat';
import Login from './src/screens/Login';
import ListItem from "./src/screens/ListItem";
import IklanPage from "./src/screens/IklanPage";
import SignupScreen from "./src/screens/SignupScreen";
import Detail from "./src/screens/Detail";
import Profil from "./src/screens/Profile";
import ListBook from "./src/screens/listBook";
import ListIklan from "./src/screens/listIklan";
import KontrakSaya from "./src/screens/kontrakSaya"

class App extends React.Component {
  render() {
    return(
      <View style={styles.containerHome}>
          <Text>Explore</Text>
      </View>
    )
  }
}

const MainNavBottom = createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'Explore',
      tabBarIcon: ( {tintColor}) =>(
        <Icon name="ios-search" color={tintColor} size={24}/>
      )
    }
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions:{
      tabBarLabel:'Wishlist',
      tabBarIcon: ( {tintColor}) =>(
        <Icon name="ios-heart" color={tintColor} size={24}/>
      )
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions:{
      tabBarLabel:'Chat',
      tabBarIcon: ( {tintColor}) =>(
        <Icon name="ios-chatboxes" color={tintColor} size={24}/>
      )
    }
  },
  Login: {
    screen: Profil,
    navigationOptions:{
      tabBarLabel:'Login',
      tabBarIcon: ( {tintColor}) =>(
        <Icon name="ios-person" color={tintColor} size={24}/>
      )
    }
  },
});

const RootRoute = createStackNavigator(
  {
    Main: {
      screen: MainNavBottom,
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
    Detail: {
      screen: Detail
    },
    iklanPage:{
      screen: IklanPage
    },
    ListIklanPage:{
      screen: ListIklan
    },
    ListBookPage:{
      screen: ListBook
    },
    kontrakSaya:{
      screen: KontrakSaya
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootRoute);

const styles = StyleSheet.create({
  containerHome: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

