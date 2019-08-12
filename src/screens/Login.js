import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";



class Login extends React.Component {
  render() {
    return(
      <View style={styles.containerHome}>
        <Text>Login</Text>
      </View>
    )
  }
}

export default Login;

const styles = StyleSheet.create({
    containerHome: {
          flex: 1,
          backgroundColor:'#fff',
          alignItems: 'center',
          justifyContent: 'center',
      },
  })