import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Title, Button, IconButton } from "react-native-paper";
import { connect } from 'react-redux'
import { functRegister, handlingEmail, handlingPassword, handlingFullname, handlingPhone, handlingconfPassword } from './../../_actions/auth'


class formRegister extends Component {
    render() {
    
        return (
            <View>

                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Nama Lengkap {this.props.auth.fullname}</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(fullname) => this.props.dispatch(handlingFullname(fullname))} placeholder='Masukkan Nama Lengkap Disini' autoCapitalize="words" underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Email {this.props.auth.email}</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(email) => this.props.dispatch(handlingEmail(email))} placeholder='Masukkan Alamat Email Disini' autoCapitalize="none" underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>No. Telp  {this.props.auth.phone}</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(phone) => this.props.dispatch(handlingPhone(phone))} keyboardType={'numeric'} placeholder='Masukkan No. Telp Disini' underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Password {this.props.auth.password}</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(password) => this.props.dispatch(handlingPassword(password))} secureTextEntry={true} placeholder='*************' autoCapitalize="none" underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Confirmation Password {this.props.auth.passwordconf}</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(confpassword) => this.props.dispatch(handlingconfPassword(confpassword))} secureTextEntry={true} placeholder='*************' autoCapitalize="none" underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(formRegister);


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