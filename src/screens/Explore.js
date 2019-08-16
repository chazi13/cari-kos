import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from "react-native";
import { Searchbar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from "react-navigation";
import Cities from '../../data/kota';

class Explore extends React.Component {

  _renderPopCity = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('ListItem', { "city": item.cityName })}>
        <View style={styles.popularCityContainer}>
          <View style={{ flex: 2 }}>
            <Image
              source={item.cityImage}
              style={styles.cityImage} />
          </View>
          <Text style={styles.cityName}>{item.cityName}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    const cities = Cities;
    return (
      <View style={styles.containerHome}>
        <View style={styles.HeaderExplore}>
          <View style={[styles.HeaderExplore, {paddingHorizontal: 10}]}>
            <Image
              style={styles.imageLogo}
              source={require('../../assets/houses.png')}
            />
            <Text style={styles.textLogo}>Carikos</Text>
          </View>
          <View style={styles.rowLayout}>
            <TouchableOpacity style={styles.touchable}>
              <Icon name="bed" size={20} color={'#fff'}></Icon>
              <Text style={styles.textWhite}>Kos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Icon name="hotel" size={20} color={'#fff'}></Icon>
              <Text style={styles.textWhite}>Hotel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Icon name="store" size={20} color={'#fff'}></Icon>
              <Text style={styles.textWhite}>Toko</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Icon name="wallet" size={20} color={'#fff'}></Icon>
              <Text style={styles.textWhite}>Dompet</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ContentParent}>
          <ScrollView style={{ flexDirection: 'column' }}>
            <View style={styles.cardSearch}>
              <Text style={styles.textTitleSearch}>Hai</Text>
              <Text style={styles.textTitleSearch2}>Mau Cari Kost Dimana?</Text>
              <Button 
                mode="contained" 
                icon="search" 
                color="#fff" 
                contentStyle={{height: 40}} 
                style={{alignItems: "flex-start", fontWeight: "100"}}
                uppercase={false} 
                onPress={() => this.props.navigation.navigate('ListItem')}
              >
                <Text style={{fontWeight: "100", margin: 0, textAlign: "left"}}>
                  Masukan alamat atau nama tempat
                </Text>
              </Button>
              {/* <Searchbar
                placeholder="Masukkan Alamat Atau Nama Tempat"
                placeholderTextColor="#BDBDBD"
                inputStyle={{ fontSize: 12, color: "#03a9f4" }}
                style={{ height: 40 }}
                onFocus={() => this.props.navigation.navigate('ListItem')}
                theme={{ colors: { font: "#03a9f4" } }}
              /> */}
            </View>
            <View style={{ height: 15, backgroundColor: '#eeeeee' }}></View>

            <View>
              <View style={styles.contentContainer}>
                <Text style={styles.subHeading}>Promo</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollHorizon}>
                  <TouchableOpacity>
                    <View style={styles.promoContainer}>
                      <View style={{ flex: 2 }}>
                        <Image
                          source={require('../../assets/traver1.jpg')}
                          style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5 }} />
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.promoContainer}>
                      <View style={{ flex: 2 }}>
                        <Image
                          source={require('../../assets/traver2.jpg')}
                          style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5 }} />
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.promoContainer}>
                      <View style={{ flex: 2 }}>
                        <Image
                          source={require('../../assets/traver3.jpg')}
                          style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5 }} />
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={{width: 10}}></View>
                </ScrollView>
              </View>

              <View style={{ flex: 1, }}>
                <View style={{ flex: 1, borderWidth: 1, borderColor: '#03A9F4', margin: 10, padding: 10, borderRadius: 5, flexDirection: 'row' }} >
                  <View style={{ flex: 4 }}>
                    <Text style={[styles.textInfo, { fontWeight: 'bold' }]}>Anda Pemilik Kost?</Text>
                    <Text style={styles.textInfo}>Tertarik untuk memasang iklan?</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigate('iklanPage')}>
                      <View style={styles.buttonInfoOutline}>
                        <Text style={[styles.textInfo, { textAlign: 'center', }]}>Pasang Iklan</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.contentContainer}>
                <Text style={styles.subHeading}>Kota Populer</Text>
                <FlatList
                  data={cities}
                  renderItem={this._renderPopCity}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollHorizon}
                  keyExtractor={(item, index) => index.toString()}
                />
                <View style={{width: 10}}></View>
              </View>
            </View>

          </ScrollView>
        </View>

      </View>

    )
  }
}

export default withNavigation(Explore);

const styles = StyleSheet.create({
  textTitleSearch: {
    color: '#fff',
  },
  textTitleSearch2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  cardSearch: {
    backgroundColor: '#03A9F4',
    height: 110,
    padding: 10,
  },
  ContentParent: {
    flex: 1,
    marginTop: 90,
    backgroundColor: '#fff'
  },
  contentContainer: {
    height: 200,
    backgroundColor: '#FFF',
    padding: 10
  },
  subHeading: {
    marginBottom: 16,
    fontWeight: 'bold'
  },
  scrollHorizon: {
    marginHorizontal: -10,
    paddingHorizontal: 0
  },
  containerHome: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  promoContainer: {
    height: 120,
    width: 300,
    marginLeft: 10,
    borderWidth: 0.5,
    borderColor: "#dddddd",
    borderColor: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  HeaderExplore: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    height: 90,
    backgroundColor: '#03A9F4',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  textLogo: {
    padding: 10,
    paddingTop: 7,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    paddingLeft: 3,
  },
  imageLogo: {
    width: 25,
    height: 25,
    margin: 3,
  },
  imageIcon: {
    width: 28,
    height: 28,

  },
  rowLayout: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 10
  },
  textWhite: {
    color: '#fff',
    fontSize: 12
  },
  textInfo: {
    color: '#03A9F4',
    fontSize: 14
  },
  buttonInfoOutline: {
    padding: 4,
    borderColor: '#03A9F4',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  columnItem: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  popularCityContainer: {
    height: 120,
    width: 80,
    marginLeft: 10,
    borderWidth: 0.5,
    borderColor: "#dddddd",
    borderColor: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    position: 'relative'
  },
  cityImage: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 5
  },
  cityName: {
    color: '#fff',
    position: 'absolute',
    bottom: 3,
    fontSize: 12,
    left: 5,
    textAlign: "center"
  }
})