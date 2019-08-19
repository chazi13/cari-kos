import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import { Title, Button, IconButton } from 'react-native-paper'



export default class formLogin extends Component {
    render() {
        return (
            <View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Email</Text>
                    <TextInput value={this.props.valueInput.email}onFocus={this.onFocusChange} name="email" onChangeText={this.props._handleInputEmail} style={styles.inputStyle} placeholder='Masukkan Email / No. Telp Disini' underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" autoCapitalize="none" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Password</Text>
                    <TextInput value={this.props.valueInput.password}onFocus={this.onFocusChange} name="password" onChangeText={this.props._handleInputPassword} style={styles.inputStyle} secureTextEntry={true} placeholder='*************' underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" autoCapitalize="none" />
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