import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text } from "react-native";
import { Button, Title, Paragraph, TouchableRipple } from "react-native-paper";
// import { createAppContainer, creat } from "react-navigation";

class SignupScreen extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <ScrollView style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Image source={require('./assets/houses.png')} style={styles.logoIcon} />
                    <Title style={styles.headerTitle}>Daftar Akun</Title>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 10,
        paddingHorizontal: 50
    },
    headerContainer: {
        paddingTop: 50,
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
    }
});

export default SignupScreen;
