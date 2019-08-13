import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { Paragraph } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

class listIklan extends React.Component {

  renderItem = ({ item, index }) => {

    return (
      <View key={index} style={styles.cardContainer}>
        <TouchableOpacity>
          <View style={styles.cardListBooking}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={require('../../assets/kamarkos.jpg')}
                  style={styles.imageIcon} />
              </View>
              <View style={{ flex: 2, padding: 5 }}>
                <Text>Kost Mamirooms Isma Tegalrejo...</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <View style={styles.detailBook}>
                    <Text style={styles.textBook}>
                      Booking
                        </Text>
                    <Text style={styles.textBook}>
                      12 Agu 2019
                        </Text>
                  </View>
                  <View style={styles.detailBook}>
                    <Text style={styles.textBook}>
                      Durasi Sewa
                        </Text>
                    <Text style={styles.textBook}>
                      1 Bulan
                        </Text>
                  </View>
                </View>

                <View style={styles.cardStatus}>
                    <Text style={{fontSize: 10, textAlign: 'center', color: '#03A9F4'}}>Tunggu Konfirmasi</Text>
                </View>                
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }


  render() {
    const cars = [{
      name: 'BMW',
      price: 3000,
      id: 1,
    },{
      name: 'BMW',
      price: 3000,
      id: 2,
    },
    {
      name: 'Porsche',
      price: 1500,
      id: 3,
    }, {
      name: 'Jaguar',
      price: 300,
      id: 4,
    },
    {
      name: 'Jaguar',
      price: 300,
      id: 5,
    },
    {
      name: 'Jaguar',
      price: 300,
      id: 5,
    }];

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containerHome}>
        <View style={styles.searchBar}>
          <View style={{ flex: 1, position: 'relative' }}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
               Daftar Iklan
            </Text>
            <TouchableOpacity style={styles.touchable} onPress={() => navigate('Login')}>
              <Icon style={{ textAlign: 'center', paddingTop: 1 }} name='ios-arrow-back' color='#fff' size={30}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, padding: 5 }}>
          <FlatList
            data={cars}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
          />
        </View>

        <TouchableOpacity onPress={() => navigate('iklanPage')}>
              <View style={{backgroundColor: '#03A9F4', padding:10, margin: 10, borderRadius: 5}}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>Tambah Iklan</Text>
              </View>
            </TouchableOpacity>
      </View>
    )
  }
}

export default listIklan;

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardStatus: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#03A9F4',
    width: '50%',
    padding: 2,
    borderRadius: 5,
  },
  cardListBooking: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eeeeee',
    height: 100,
  },
  textBook: {
    fontSize: 12,
    color: '#bdbdbd',
  },
  detailBook: {
    flex: 1,
    marginRight: 15,
  },
  searchBar: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#03A9F4',
    height: 60,
    marginBottom: 20,
    flexDirection: 'row'
  },
  seactInput: {
    paddingHorizontal: 40,
    padding: 5,
    height: 40,
    borderRadius: 5,
    borderColor: '#03A9F4',
    backgroundColor: '#CFD8DC',
    borderWidth: 1
  },
  imageIcon: {
    width: 100,
    height: 100,
    borderRadius: 2,
  },
  touchable: {
    position: 'absolute',
    top: 3,
    left: 10,
  },
  cardContainer: {
    marginBottom: 10,
    marginTop: 2,
  },
  starIconContainer: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  textDefault: {
    fontSize: 10,
    color: '#BDBDBD'
  },
  textSeparator: {
    marginHorizontal: 5,
    marginBottom: 10
  },
  kostName: {
    color: '#757575',
    fontSize: 10,
    flex: 1
  },
  textPrice: {
    fontWeight: '600',
    marginTop: -5,
    fontSize: 12
  },
  textUpdated: {
    color: '#757575',
    fontSize: 10,
    flex: 1,
    marginLeft: 5,
    paddingBottom: 5
  }
})