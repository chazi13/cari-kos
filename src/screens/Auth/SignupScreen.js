import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Title, Button, IconButton } from "react-native-paper";
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

// import component 
import HeaderRegister from './../../components/Register/headerRegister'
import FormGroup from './../../components/Register/formRegister'
import ButtonRegister from "../../components/Register/buttonRegister";
import LinkRedirect from "../../components/Register/linkRedirectLogin"

class SignupScreen extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      telepon: '',
      password: ''
    }
  }

  _handlerChangeNama = (nama) => {
    this.setState({
      fullname: nama
    })
  }

  _handlerChangeEmail = (email) => {
    this.setState({
      email: email
    })
  }

  _handlerChangeTelepon = (telepon) => {
    this.setState({
      telepon: telepon
    })
  }

  _handlerChangePassword = (password) => {
    this.setState({
      password: password
    })
  }

  _submitHandler = async () => {
    let dataUser = {
      fullname: this.state.fullname,
      email: this.state.email,
      phone: this.state.telepon,
      password: this.state.password
    }
     await axios.post('http://192.168.0.8:3000/api/v1/register', dataUser)
      .then(async (res) => {
        // handle success
        await AsyncStorage.setItem('token', JSON.stringify(res.data.data.token));
        alert('Register Berhasil')
        this.props.navigation.navigate('Auth')
      })
      .catch(function (error) {
        alert(error);
        // handle error
        console.log(error);
      })
    // alert('data = ' + this.state.nama + this.state.email + this.state.password + this.state.telepon)
  }



  render() {

    return (


      <ScrollView style={styles.mainContainer}>
        <HeaderRegister navigation={this.props.navigation} />
        <FormGroup handlerinput={{ nama: this._handlerChangeNama, password: this._handlerChangePassword, email: this._handlerChangeEmail, telepon: this._handlerChangeTelepon }} />
        <ButtonRegister _submitHandler={this._submitHandler} />
        <LinkRedirect navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },


  floatLeft: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "row",
    alignItems: "flex-start"
  },
});

export default SignupScreen;
