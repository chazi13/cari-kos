import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Title, Button, IconButton } from "react-native-paper";


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


  _simpanAsynStorage = async () => {
    const { email, password } = this.state

    if ( email == 'lucinta' && password == 'luna') {
      let dataUser = {
        email: email,
        password: password
      }
  
      await AsyncStorage.setItem('user', JSON.stringify(dataUser));
      Keyboard.dismiss();
      alert('Anda Berhasil Login')
      this.props.navigation.navigate('Login')
    } else {
      this.setState({
        email: '',
        password: ''
      })
      alert('Username atau email salah')
    }

  }

  _showAsynStorage = async () => {
    try {
      let user = await AsyncStorage.getItem('user')
        if (user != null) {
          let data = JSON.parse(user)
          alert(data.email + ' ' + data.password)
        } else {
          alert('asyncStorage sudah kosong')
        };
    } catch (err) {
      alert(err)
    }

  }

  _destroyAsynStorage = async () => {
    try {
      let destroy = await AsyncStorage.removeItem('user')
    } catch (err) {
      console.log(err)
      alert('asyncStorage sudah kosong')
    }
  

  }







  _handleInputEmail = (text) => {
    this.setState({
      email: text
    })
  }

  _handleInputPassword = (text) => {
    this.setState({
      password: text
    })
  }

  _submitHandle = () => {
    //handle submit
    alert('submit data = ' + 'Email = ' + this.state.email + 'Password = ' + this.state.password)
  }




  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <HeaderLogin navigation={this.props.navigation} />
        <View>
          <Text>{this.state.email}</Text>
          <Text>{this.state.password}</Text>
        </View>
        <FormLogin _handleInputEmail={this._handleInputEmail} _handleInputPassword={this._handleInputPassword} valueInput={{email : this.state.email, password: this.state.password}} />
        <ButtonLogin _submitHandle={this._submitHandle} />
        <ButtonRegister navigation={this.props.navigation} />
        <ButtonLogin _submitHandle={this._simpanAsynStorage} />
        <ButtonLogin _submitHandle={this._showAsynStorage} />
        <ButtonLogin _submitHandle={this._destroyAsynStorage} />
      </ScrollView>
    )
  }
}

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


export default Login;
