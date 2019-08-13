import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, TextInput } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';





class Profile extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containerHome}>
        <View>
          <ScrollView>
            <View style={styles.headerProfile}>
              <View style={{ flex: 1 }}>
                <Image
                  source={require('../../assets/profildefaultuser.png')}
                  style={styles.imageIcon} />
              </View>
              <View style={{ flex: 3, paddingTop: 3 }}>
                <Text style={styles.namaProfil}>Ricky Ariansyah</Text>
                <Text style={styles.notelepon}>082310569056</Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <Text style={styles.btnEditPro}>Edit Profil</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ position: 'relative', flex: 1, }}>
              <View style={styles.headerRadius}>

              </View>
              <View style={styles.cardNav}>
                <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 5 }}>
                  <Text style={{ fontSize: 12, marginBottom: 5, color: '#03A9F4', fontWeight: 'bold' }}>Profil saya</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 1, marginTop: 10, }}>
                  <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('kontrakSaya')}>
                    <Icon name="file-alt" style={{ textAlign: 'center' }} size={28} color={'#03A9F4'}></Icon>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 10, color: '#03A9F4' }}>Kontrak</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon name="list-ul" style={{ textAlign: 'center' }} size={28} color={'#03A9F4'}></Icon>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 10, color: '#03A9F4' }}>Tagihan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon name="hammer" style={{ textAlign: 'center' }} size={28} color={'#03A9F4'}></Icon>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 10, color: '#03A9F4' }}>Komplain perbaikan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon name="store" style={{ textAlign: 'center' }} size={28} color={'#03A9F4'}></Icon>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 10, color: '#03A9F4' }}>Toko</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={() => navigate('ListBookPage')}>
              <View style={styles.cardProf}>
              <Icon name="clock" style={{ textAlign: 'center',  }} size={20} color={'#03A9F4'}></Icon>
              <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10,  color: '#03A9F4' }}>Daftar Booking</Text>
                  
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('ListIklanPage')}>
              <View style={styles.cardProf}>
              <Icon name="ad" style={{ textAlign: 'center',  }} size={20} color={'#03A9F4'}></Icon>
              <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10,  color: '#03A9F4' }}>Daftar Iklan</Text>
                  
              </View>
            </TouchableOpacity>

             <TouchableOpacity>
              <View style={styles.cardProf}>
              <Icon name="user-circle" style={{ textAlign: 'center',  }} size={20} color={'#03A9F4'}></Icon>
              <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10,  color: '#03A9F4' }}>Verifikasi Akun</Text>
                  
              </View>
            </TouchableOpacity>


            <View style={{marginTop: 10}}>
            <TouchableOpacity>
              <View style={styles.cardProfbot}>
              <Icon name="wrench" style={{ textAlign: 'center',  }} size={20} color={'#03A9F4'}></Icon>
              <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10,  color: '#03A9F4' }}>Pengaturan</Text>
                  
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.cardProfbot}>
              <Icon name="phone-volume" style={{ textAlign: 'center',  }} size={20} color={'#03A9F4'}></Icon>
              <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10,  color: '#03A9F4' }}>Hubungi CS</Text>
                  
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.cardProfbot}>
              <Icon name="scroll" style={{ textAlign: 'center',  }} size={20} color={'#03A9F4'}></Icon>
              <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10,  color: '#03A9F4' }}>Syarat dan Ketentuan</Text>
                  
              </View>
            </TouchableOpacity>
            </View>


          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Profile;


const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#eee',
  },
  btnEditPro: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'right',
    paddingRight: 2,
  },
  headerProfile: {
    backgroundColor: '#03A9F4',
    height: 70,
    flex: 1,
    padding: 10,
    flexDirection: 'row'
  },
  cardNav: {
    flex: 1,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'relative',
    marginTop: -50,
    marginHorizontal: 20,
    padding: 5,
  },
  imageIcon: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  cardProf:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
  },
  cardProfbot:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 20,
  },
  headerRadius: {
    backgroundColor: '#03A9F4',
    height: 70,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

  },
  namaProfil: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  notelepon: {
    color: '#fff',
    fontSize: 10,
  }
})