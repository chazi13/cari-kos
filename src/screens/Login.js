import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Title, Button } from "react-native-paper";

class Login extends Component {
  render() {
    return(
      <ScrollView style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Image source={require('../../assets/houses.png')} style={styles.logoIcon} />
          <Title style={styles.headerTitle}>Daftar Akun</Title>
        </View>
        <View>
          <TextInput mode="outlined" selectionColor="#03a9f4" autoFocus label="Email atau Telp" style={styles.inputDefault} placeholder="Masukan email atau telp" />
          <TextInput mode="outlined" selectionColor="#03a9f4" label="Password" secureTextEntry={true} style={styles.inputDefault} placeholder="*******" />
        </View>
        <View style={{marginBottom: 20}}>
            <Button mode="contained" style={styles.buttonSubmit} onPress={() => {console.log('button pressed')}}>
              Simpan
            </Button>
        </View>
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
  inputDefault: {
    marginVertical: 7.5,
  },
  floatLeft: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  buttonSubmit: {
    backgroundColor: '#1E88E5',
    fontWeight: "bold",
    shadowColor: "#0D47A1",
    shadowOpacity: 0.2,
    shadowOffset: {
      bottom: 2
    }
  },
});


export default Login;
