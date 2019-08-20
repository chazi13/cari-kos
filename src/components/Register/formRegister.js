import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Title, Button, IconButton } from "react-native-paper";



export default class formRegister extends Component {
    render() {
        const {nama, email, telepon, password}  = this.props.handlerinput
        return (
            <View>
        
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Nama Lengkap</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={nama} placeholder='Masukkan Nama Lengkap Disini' autoCapitalize="words" underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Email</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={email} placeholder='Masukkan Alamat Email Disini' autoCapitalize="none" underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>No. Telp</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={telepon} keyboardType={'numeric'} placeholder='Masukkan No. Telp Disini' underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Password</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={password} secureTextEntry={true} placeholder='*************' autoCapitalize="none" underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
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
})