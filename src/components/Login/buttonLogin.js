import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import { Title, Button, IconButton } from 'react-native-paper'



export default class buttonLogin extends Component {
    render() {
        return (
            <View style={{ marginBottom: 20 }}>
                <Button mode="contained" style={styles.buttonSubmit} onPress={this.props._submitHandle}>
                    Login
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
      },
})