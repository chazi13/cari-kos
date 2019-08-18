import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Title, Button, IconButton } from "react-native-paper";


export default class buttonRegister extends Component {
    render() {
        return (
            <View style={{ marginVertical: 20 }}>
                <Button mode="contained" style={styles.buttonSubmit} onPress={this.props._submitHandler}>
                    Daftar
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonSubmit: {
        backgroundColor: '#1E88E5',
        fontWeight: "bold",
        shadowColor: "#0D47A1",
        shadowOpacity: 0.2,
        shadowOffset: {
            bottom: 2
        }
    }
})