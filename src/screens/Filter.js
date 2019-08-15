import React, { Component } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Appbar, Button, Checkbox } from "react-native-paper";
import Modal from "react-native-modal";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      gender: "Campur",
      genderMixChecked: true
    }
  }

  showModal = (type) => () => {
    this.setState({
      modalVisible: type
    });
  }

  render() {
    const features = require('../../data/fitur.json');

    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header style={styles.headerStyle}>
          <Appbar.Content title="Filter" />
          <Appbar.Action icon="close" onPress={() => this.props.navigation.goBack()} />
        </Appbar.Header>
        <ScrollView style={[styles.mainContainer]}>
          <View>
            <Text style={styles.textLabel}>Tipe Kost (Gender)</Text>
            <Button style={[styles.inputStyle, styles.buttonInput]} uppercase={false} onPress={this.showModal("gender")}>
              <Text style={{ color: "#03a9f4" }}>{this.state.gender}</Text>
            </Button>
            <Modal isVisible={this.state.visibleModal === "gender"}>
              <View style={[styles.floatLeft, {alignItems: "space-between"}]}>
                <Text style={{ paddingTop: 2 }}>Campur</Text>
                <Checkbox
                  status="unchecked"
                  onPress={() => { this.setState({ checked: !checked }); }}
                />
              </View>
              <View style={[styles.floatLeft, {alignItems: "space-between"}]}>
                <Text style={{ paddingTop: 2 }}>Putra</Text>
                <Checkbox
                  status="unchecked"
                  onPress={() => { this.setState({ checked: !checked }); }}
                />
              </View>
              <View style={[styles.floatLeft, {alignItems: "space-between"}]}>
                <Text style={{ paddingTop: 2 }}>Putri</Text>
                <Checkbox
                  status="unchecked"
                  onPress={() => { this.setState({ checked: !checked }); }}
                />
              </View>
            </Modal>
          </View>
          <View>
            <Text style={styles.textLabel}>Jangka Waktu</Text>
            <Button style={[styles.inputStyle, styles.buttonInput]} uppercase={false} onPress={this.showModal("range")}>
              <Text style={{ color: "#03a9f4" }}>Check</Text>
            </Button>
          </View>
          <View>
            <Text style={styles.textLabel}>Harga</Text>
            <View style={styles.floatLeft}>
              <View style={{ flex: 8 }}>
                <TextInput onFocus={this.onFocusChange} keyboardType="numeric" style={styles.inputStyle} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, textAlign: "center" }}>-</Text>
              </View>
              <View style={{ flex: 8 }}>
                <TextInput onFocus={this.onFocusChange} keyboardType="numeric" style={styles.inputStyle} />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textLabel}>Minimal Pembayaran</Text>
            <Button style={[styles.inputStyle, styles.buttonInput]} uppercase={false} onPress={this.showModal("min")}>
              <Text style={{ color: "#03a9f4" }}>Check</Text>
            </Button>
          </View>
          <View>
            <Text style={styles.textLabel}>Fasilitas</Text>
            {features.map((fitur, index) => (
              <View key={index} style={styles.floatLeft}>
                <Checkbox
                  status="unchecked"
                  onPress={() => { this.setState({ checked: !checked }); }}
                />
                <Text style={{ paddingTop: 2 }}>{fitur.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={[styles.footerContainer, styles.floatLeft]}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text style={styles.textUppercase}>Simpan</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text style={styles.textUppercase}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Text style={[styles.textUppercase, { color: "#03a9f4" }]}>Cari</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  mainContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 50
  },
  floatLeft: {
    flexDirection: "row"
  },
  inputStyle: {
    height: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#03A9F4',
  },
  buttonInput: {
    alignItems: "flex-start",
    paddingHorizontal: 0,
    color: "#333"
  },
  textLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10
  },
  footerContainer: {
    padding: 15,
    shadowColor: "#333",
    shadowOpacity: 1,
    shadowOffset: {
      top: 2
    },
  },
  textUppercase: {
    textTransform: "uppercase",
    fontWeight: "700",
    textAlign: "center"
  }
})

export default Filter;