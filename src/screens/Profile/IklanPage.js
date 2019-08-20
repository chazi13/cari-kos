import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Imageslider from './../../components/ImageSlider';
import ImagePicker from 'react-native-image-crop-picker'
import AsyncStorage from '@react-native-community/async-storage'
import Maps from "../../components/Maps";
import axios from 'axios'

// import Component 
import TextInputIklan from './../../components/TextInput/TextInputIklan'
import LabelIklan from './../../components/Label/LabelFormIklan'
class IklanPage extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      type: '',
      rooms_available: '',
      address: '',
      full_address: '',
      latitude: '',
      longitude: '',
      price: '',
      width: '',
      length: '',
      features: '',
      city: '',
      desc: '',
      images: '',
      owner: '',
      ImageArrayFinal: null,
      jwt: undefined,
    }
  }



  componentDidMount() {
    this._showAsynStorage()
  }

  //get JWT
  _showAsynStorage = async () => {
    try {
      let user = await AsyncStorage.getItem('token')
      if (user != null) {
        this.setState({
          jwt: user
        })
        alert('Bearer ' + JSON.parse(user))
      } else {
        alert('asyncStorage sudah kosong')
      };
    } catch (err) {
      alert(err)
    }

  }



  _handleSimpan = async () => {
    

    let jwt = JSON.parse(this.state.jwt)
    let datakost = {
      name: this.state.name,
      // type: DataTypes.ENUM('Campur', 'Putra', 'Putri'),
      rooms_avaible: this.state.rooms_available,
      // address: DataTypes.STRING,
      full_address: this.state.full_address,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      price: this.state.price,
      width: this.state.width,
      lenght: this.state.length,
      // features: DataTypes.STRING,
      city: this.state.city,
      desc: this.state.desc,
      // images: DataTypes.STRING,
    }

    datakost = JSON.stringify(datakost)


    await axios.post('http://192.168.0.8:3000/api/v1/dorms', datakost, { headers: { 'Authorization': 'Bearer ' + jwt,  "Content-Type": "application/json" } })
      .then(function (response) {
        // handle success
        console.log(response);
        alert('Input Data Kost Berhasil')
        this.props.navigation.goBack()
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        alert(this.state.jwt)
      })
  }


  handlePicker = () => ImagePicker.openPicker({
    multiple: true
  }).then(images => {
    console.log(images);
    let imgpatharray = []
    images.map((item, index) => {
      imgpatharray.push({ src: { uri: item.path } })

      this.setState({
        ImageArrayFinal: imgpatharray
      })
    })

  });

  _handleChange = (nama) => {
    return (text) => {
      this.setState({
        [nama]: text
      })
    }
  }





  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containerHome}>
        <View style={styles.HeaderExplore}>
          <TouchableOpacity style={styles.touchable} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" style={{ marginTop: 10 }} size={18} color={'#fff'}></Icon>
          </TouchableOpacity>
          <Text style={styles.textLogo}>Tambah Data Iklan</Text>
        </View>

        <View style={styles.formIklan}>
          <ScrollView>
            <Text>{this.state.name}</Text>
            <Text>{this.state.full_address}</Text>

            {/* Nama Kost */}
            <LabelIklan label="Nama Kost" />
            <TextInputIklan namaValue="name" _handleChange={this._handleChange} placeholderEdit="Masukkan Nama Kost Disini" />

            {/* Alamat Kost */}
            <LabelIklan label="Alamat Kost" />
            <TextInputIklan namaValue="full_address" _handleChange={this._handleChange} placeholderEdit="Masukkan Alamat Disini (contoh : nama jalan, kelurahan, kecamatan)" />


            <TouchableOpacity onPress={this._showAsynStorage}>
              <View style={{ backgroundColor: '#03A9F4', flex: 1, marginTop: 5, padding: 5, borderRadius: 5 }}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>
                 show token
                 </Text>
              </View>
            </TouchableOpacity>
            {
              this.state.ImageArrayFinal && (
                <Imageslider photos={this.state.ImageArrayFinal} />
              )
            }



            <TouchableOpacity onPress={this.handlePicker}>
              <View style={{ backgroundColor: '#03A9F4', flex: 1, marginTop: 5, padding: 5, borderRadius: 5 }}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>
                  Pilih Foto
                 </Text>
              </View>
            </TouchableOpacity>


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
                <LabelIklan label="Masukkan Latitude" />
                <TextInputIklan namaValue="latitude" _handleChange={this._handleChange} placeholderEdit="Latitude" />
              </View>

              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, }}>
                <LabelIklan label="Masukkan Longitude" />
                <TextInputIklan namaValue="longitude" _handleChange={this._handleChange} placeholderEdit="Longitude" />
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, }}>
                <LabelIklan label="Lebar Ruangan" />
                <TextInputIklan namaValue="width" _handleChange={this._handleChange} placeholderEdit="Lebar Ruangan" />
              </View>

              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, }}>
                <LabelIklan label="Panjang Ruangan" />
                <TextInputIklan namaValue="length" _handleChange={this._handleChange} placeholderEdit="Panjang Ruangan" />
              </View>
            </View>

            <LabelIklan label="Jumlah Ruangan" />
            <TextInputIklan namaValue="rooms_available" _handleChange={this._handleChange} placeholderEdit="Masukkan Alamat Disini (contoh : nama jalan, kelurahan, kecamatan)" />

            <LabelIklan label="Harga" />
            <TextInputIklan namaValue="price" _handleChange={this._handleChange} placeholderEdit="Masukkan Alamat Disini (contoh : nama jalan, kelurahan, kecamatan)" />

            <LabelIklan label="kota" />
            <TextInputIklan namaValue="city" _handleChange={this._handleChange} placeholderEdit="Masukkan Alamat Disini (contoh : nama jalan, kelurahan, kecamatan)" />

            <LabelIklan label="Deskripsi" />
            <TextInputIklan namaValue="desc" _handleChange={this._handleChange} placeholderEdit="Masukkan Alamat Disini (contoh : nama jalan, kelurahan, kecamatan)" />


            <TouchableOpacity onPress={this._handleSimpan}>
              <View style={{ backgroundColor: '#03A9F4', padding: 10, margin: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', color: '#fff' }}>Submit</Text>
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