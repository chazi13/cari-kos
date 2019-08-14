import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput } from "react-native";
import { Title, Button } from "react-native-paper";

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
                    <View style={styles.formGroup}>
                        <Text style={styles.textLabel}>Nama Lengkap</Text>
                        <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} placeholder='Masukkan Nama Lengkap Disini' underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.textLabel}>Email</Text>
                        <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} placeholder='Masukkan Alamat Email Disini' underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.textLabel}>No. Telp</Text>
                        <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} keyboardType={'numeric'} placeholder='Masukkan No. Telp Disini' underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.textLabel}>Password</Text>
                        <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} secureTextEntry={true} placeholder='*************' underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                    </View>
                    {/* <TextInput mode="outlined" label="Nama Lengkap" style={styles.inputDefault} placeholder="Masukan nama lengkap" />
                    <TextInput mode="outlined" label="Email" style={styles.inputDefault} placeholder="Masukan alamat email" />
                    <TextInput mode="outlined" label="No. Telp" keyboardType={'numeric'} style={styles.inputDefault} placeholder="Masukan no. Telp kamu" />
                    <TextInput mode="outlined" label="Password" secureTextEntry={true} style={styles.inputDefault} placeholder="*******" /> */}
                </View>
                <View style={{marginVertical: 20}}>
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
    formGroup: {
        paddingVertical: 5
    },
    textLabel: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 10
    },
    inputStyle: {
        height: 50,
        borderWidth: 0,
        backgroundColor: '#fff',
        borderBottomColor: '#03A9F4',
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