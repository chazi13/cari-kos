import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text } from "react-native";
import { TextInput, Title, Subheading, RadioButton, Button } from "react-native-paper";

class SignupScreen extends Component {
    constructor() {
        super();
        this.state = {
            checked: ''
        }
    }

    _handlerChangeValue = (val) => {
        this.setState({
            checked: val
        })
    }

    render() {
        return (
            <ScrollView style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Image source={require('../../assets/houses.png')} style={styles.logoIcon} />
                    <Title style={styles.headerTitle}>Daftar Akun</Title>
                </View>
                <View>
                    <TextInput mode="outlined" label="Nama Lengkap" style={styles.inputDefault} placeholder="Masukan nama lengkap" />
                    <TextInput mode="outlined" label="Email" style={styles.inputDefault} placeholder="Masukan alamat email" />
                    <TextInput mode="outlined" label="No. Telp" keyboardType={'numeric'} style={styles.inputDefault} placeholder="Masukan no. Telp kamu" />
                    <TextInput mode="outlined" label="Password" secureTextEntry={true} style={styles.inputDefault} placeholder="*******" />
                    
                    <RadioButton.Group style={[styles.floatLeft, {alignItems: "stretch"}]} onValueChange={this._handlerChangeValue}>
                        <Subheading>Daftar sebagai :</Subheading>
                        <View style={[styles.floatLeft]}>
                            <RadioButton value="pengiklan" status={this.state.checked == 'pengiklan' ? 'checked' : 'unchecked'} color="#03a9f4" />
                            <Text style={{flex: 1}}>Pengiklan</Text>
                        </View>
                        <View style={[styles.floatLeft]}>
                            <RadioButton value="pengguna" status={this.state.checked == 'pengguna' ? 'checked' : 'unchecked'} color="#03a9f4" />
                            <Text style={{flex: 1}}>Pengguna</Text>
                        </View>
                    </RadioButton.Group>
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
        marginVertical: 15,
        paddingVertical: 0
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

export default SignupScreen;
