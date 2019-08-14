import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';

import Maps from "../components/Maps";

class IklanPage extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containerHome}>
        <View style={styles.HeaderExplore}>
          <TouchableOpacity style={styles.touchable} onPress={() => navigate('Main')}>
            <Icon name="arrow-left" style={{ marginTop: 10 }} size={18} color={'#fff'}></Icon>
          </TouchableOpacity>
          <Text style={styles.textLogo}>Tambah Data Iklan</Text>
        </View>

        <View style={styles.formIklan}>
          <ScrollView>
            <Text style={styles.textLabel}>Nama Kost</Text>
            <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} placeholder='Masukkan Nama Kost Disini' underlineColor="#03A9F4" underlineColorAndroid="#03a9f4" selectionColor="#03A9F4" />
            
            <Text style={styles.textLabel}>Alamat Kost</Text>
            <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} placeholder='masukkan nama jalan, kecamatan, kelurahan, dll' underlineColor="#03A9F4" underlineColorAndroid="#03A9F4" selectionColor="#03A9F4" placeholderTextColor="#D3D3D3" />
            
            <Text style={styles.textLabel}>Search Alamat/area kost anda di Peta, kemudian pindahkan pin peta ke lokasi tepat kost anda</Text>
            <View style={{ position: 'relative', marginTop: 5 }}>
              <TextInput
                style={styles.searchInput} placeholder='Cari Alamat kost' underline='transparent' placeholderTextColor="#D3D3D3" selectionColor='#03A9F4'
              />
              <Icon style={{ position: 'absolute', top: 3, left: 2, paddingTop: 15, paddingLeft: 5 }} name='search' color='#03A9F4' size={24}></Icon>
            </View>


            <View style={{ height: 250, backgroundColor: '#03A9F4', marginTop: 10 }}>
              <Maps 
                region={{
                  latitude: -6.301686,
                  longitude: 106.734972,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
                }}
                height={250}
                title="Cek tempat"
              />
            </View>


            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, }}>
                <Text style={styles.textLabel}>Masukkan Latitude</Text>
                <TextInput
                  style={styles.inputStyle} placeholder='Latitude' underlineColor="#03A9F4" underlineColorAndroid="#03A9F4" selectionColor="#03A9F4" placeholderTextColor="#D3D3D3"
                />
              </View>

              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, }}>
                <Text style={styles.textLabel}>Masukkan Longitude</Text>
                <TextInput
                  style={styles.inputStyle} placeholder='Longitude' underlineColor="#03A9F4" underlineColorAndroid="#03A9F4" selectionColor="#03A9F4" placeholderTextColor="#D3D3D3"
                />
              </View>
            </View>


            <Text style={styles.textLabel}>Pemilik Kost</Text>
            <TextInput

              style={styles.inputStyle} placeholder='Nama Pemilik Kost' underlineColor="#03A9F4" underlineColorAndroid="#03A9F4" selectionColor="#03A9F4" placeholderTextColor="#D3D3D3"

            />

            <Text style={styles.textLabel}>Nomor Handphone Pemilik Kost</Text>
            <TextInput
              onFocus={this.onFocusChange}
              style={styles.inputStyle} placeholder='Nomor Handphone Pemilik Kost' underlineColor="#03A9F4" underlineColorAndroid="#03A9F4" selectionColor="#03A9F4" placeholderTextColor="#D3D3D3"

            />

            <Text style={styles.textLabel}>Pengelola Kost</Text>
            <TextInput

              style={styles.inputStyle} placeholder='Pemilik Kost' underlineColor="#03A9F4" underlineColorAndroid="#03A9F4" selectionColor="#03A9F4" placeholderTextColor="#D3D3D3"

            />

            <Text style={styles.textLabel}>Nomor Handphone Pengelola Kost</Text>
            <TextInput

              style={styles.inputStyle} placeholder='Nomor Handphone pengelola kost' underlineColor="#03A9F4" underlineColorAndroid="#03A9F4" selectionColor="#03A9F4" placeholderTextColor="#D3D3D3"

            />
            <TouchableOpacity>
              <View style={{backgroundColor: '#03A9F4', padding:10, margin: 10, borderRadius: 5}}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>Submit</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default IklanPage;


const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputStyle: {
    height: 50,
    borderWidth: 0,
    backgroundColor: '#fff',
    borderBottomColor: '#03A9F4',
  },
  searchInput: {
    marginTop: 7,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 35,
    height: 50,
  },
  textLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10
  },
  formIklan: {
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  HeaderExplore: {
    textAlignVertical: 'center',
    padding: 7,
    flexDirection: 'row',
    flex: 1,
    height: 50,
    backgroundColor: '#03A9F4',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  ContentExplore: {


  },
  textLogo: {
    padding: 10,
    paddingTop: 7,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 5,
  },
  imageLogo: {
    width: 20,
    height: 20,
    margin: 3,
  },
})