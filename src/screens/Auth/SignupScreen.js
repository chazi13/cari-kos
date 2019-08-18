import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Title, Button, IconButton } from "react-native-paper";



// import component 
import HeaderRegister from './../../components/Register/headerRegister'
import FormGroup from './../../components/Register/formRegister'
import ButtonRegister from "../../components/Register/buttonRegister";
import LinkRedirect  from "../../components/Register/linkRedirectLogin"

class SignupScreen extends Component {
  constructor() {
    super();
    this.state = {
      nama: '',
      email: '',
      telepon: '',
      password: ''
    }
  }

  _handlerChangeNama = (nama) => {
    this.setState({
      nama: nama
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

  _submitHandler= () => {
    alert('data = ' + this.state.nama + this.state.email + this.state.password + this.state.telepon)
  }

  

  render() {

    return (

     
      <ScrollView style={styles.mainContainer}>
        <HeaderRegister navigation={this.props.navigation}/>
        <FormGroup handlerinput={{nama : this._handlerChangeNama, password : this._handlerChangePassword,email : this._handlerChangeEmail, telepon: this._handlerChangeTelepon} }/>
        <ButtonRegister _submitHandler={this._submitHandler}/>
        <LinkRedirect navigation={this.props.navigation}/>
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
