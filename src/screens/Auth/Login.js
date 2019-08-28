import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Title, Button, IconButton } from "react-native-paper";
import axios from "axios";
import { connect } from 'react-redux';
import { functLogin, handlingEmail, handlingPassword } from './../../_actions/auth'
// import component 
import HeaderLogin from './../../components/Login/headerLogin'
import FormLogin from './../../components/Login/formLogin'
import ButtonLogin from './../../components/Login/buttonLogin'
import ButtonRegister from "./../../components/Login/buttonRegister";


class Login extends Component {

  constructor() {
    super();
    // deklarasi state
    this.state = {
      email: '',
      password: ''
    }
  }

  // _handleMultiInput(name) {
  //   return (text) => {
  //     this.setState({ [name]: text })
  //   }
  // }




  _destroyAsynStorage = async () => {
    try {
      let destroy = await AsyncStorage.removeItem('user')
      this.props.navigate.navigation('Guest')
    } catch (err) {
      console.log(err)
      alert('asyncStorage sudah kosong')
    }


  }

 


  componentDidUpdate() {
    if (this.props.auth.berhasil == true) {
      alert('Berhasil Bosque')
      this.props.navigation.navigate('Auth')
    } else {

    }
  }

  render() {
    console.log(this.props.auth)
    return (
      <ScrollView style={styles.mainContainer}>
        <HeaderLogin navigation={this.props.navigation} />
        <FormLogin _handleInputEmail={this._handleInputEmail} _handleInputPassword={this._handleInputPassword} valueInput={{ email: this.state.email, password: this.state.password }} />
        <ButtonLogin _submitHandle={this._simpanAsynStorage} />
        <ButtonRegister navigation={this.props.navigation} />

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  headerContainer: {
    paddingTop: 30,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  logoIcon: {
    width: 50,
    height: 50,
    marginBottom: 20
  },
  headerTitle: {
    fontSize: 30
  },
  floatLeft: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "row",
    alignItems: "flex-start"
  },
});



