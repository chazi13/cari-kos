import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Button, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from "react-navigation";

class Explore extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.containerHome}>
          <View style={styles.HeaderExplore}>
               <View style={styles.HeaderExplore}>
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
            <ScrollView style={{flexDirection: 'column'}}>
                <View style={styles.cardSearch}>
                    <Text style={styles.textTitleSearch}>Hai</Text>
                    <Text style={styles.textTitleSearch2}>Mau Cari Kost Dimana?</Text>
                    <Searchbar
                        placeholder="Masukkan Alamat Atau Nama Tempat"
                        placeholderTextColor="#BDBDBD" 
                        inputStyle={{fontSize:12}}
                        style={{height:40}}
                    />
                </View>
                <View style={{height:15, backgroundColor: '#eeeeee'}}>
                
                </View>
                
                <View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.subHeading}>Promo</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollHorizon}>
                              <TouchableOpacity>
                              <View style={styles.promoContainer}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/traver1.jpg')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>
                              </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={styles.promoContainer}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/traver2.jpg')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={styles.promoContainer}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/traver3.jpg')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>
                               </TouchableOpacity>
                                
                            
                            </ScrollView>
                    </View>

                    <View style={{flex:1, }}>
                        <View style={{flex:1, borderWidth: 1, borderColor: '#03A9F4', margin:10, padding:10, borderRadius:5, flexDirection: 'row'}} >
                            <View style={{flex:4}}>
                                <Text style={[styles.textInfo, { fontWeight: 'bold'}]}>Anda Pemilik Kost?</Text>
                                <Text style={styles.textInfo }>Tertarik untuk memasang iklan?</Text>
                            </View>
                            <View style={{flex:1}}>
                              <TouchableOpacity>
                                    <View style={styles.buttonInfoOutline}>
                                        <Text style={[styles.textInfo, {textAlign: 'center',}]}>Pasang Iklan</Text>
                                    </View>   
                              </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contentContainer}>
                        <Text style={styles.subHeading}>Kota Populer</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollHorizon}>
                                
                               <TouchableOpacity  onPress={() => navigate('ListItem')}>
                               <View style={styles.popularCityContainer}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/monas.jpg')}
                                        style={styles.cityImage}/>
                                       
                                    </View>
                                    <Text style={styles.cityName}>Jakarta</Text>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={styles.popularCityContainer}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/surabaya.jpg')}
                                        style={styles.cityImage}/>
                                       
                                    </View>
                                    <Text style={styles.cityName}>Surabaya</Text>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={styles.popularCityContainer}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/bandung.jpg')}
                                        style={styles.cityImage}/>
                                       
                                    </View>
                                    <Text style={styles.cityName}>Bandung</Text>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={styles.popularCityContainer}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/padang.jpg')}
                                        style={styles.cityImage}/>
                                       
                                    </View>
                                    <Text style={styles.cityName}>Padang</Text>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={styles.popularCityContainer}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/semarang.jpg')}
                                        style={styles.cityImage}/>
                                    </View>
                                    <Text style={styles.cityName}>Semarang</Text>
                                </View>
                               </TouchableOpacity>

                                
                            </ScrollView>
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
    textTitleSearch:{
        color: '#fff',
    },
    textTitleSearch2:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    cardSearch: {
        backgroundColor: '#03A9F4',
        height:110,
        padding: 10,
    },
    ContentParent: {
        flex:1,
        marginTop:90,
        backgroundColor: '#fff' 
    },
    contentContainer: {
        height:200, 
        backgroundColor: '#FFF', 
        padding: 10
    },
    subHeading: {
        marginBottom: 16, 
        fontWeight: 'bold'
    },
    scrollHorizon: {
        marginBottom:10,
        paddingHorizontal: 0
    },
    containerHome: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'#fff',
        justifyContent: 'center',
    },
    promoContainer: {
        height:120, 
        width:300, 
        marginRight: 10, 
        borderWidth:0.5, 
        borderColor:"#dddddd", 
        borderColor:10,
        borderRadius:5, 
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
        top:0,
        left:0,
        right:0,
    },
    textLogo:{
        padding: 10,
        paddingTop:7,
        color: '#fff',
        fontWeight: 'bold',
        fontSize:18,
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
      rowLayout:{
        flex:1,
        marginTop:40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40, 
        paddingBottom:5, 
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
      columnItem:{
          flexDirection: 'row',
          paddingRight: 10,
      },
      touchable: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      popularCityContainer: {
        height:120, 
        width:80, 
        marginRight: 10, 
        borderWidth:0.5, 
        borderColor:"#dddddd", 
        borderColor:10,
        borderRadius:5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1, 
        position: 'relative'
    },
    cityImage: {
        flex:1, 
        height:null, 
        width:null, 
        borderRadius:5
    },
    cityName: {
        color: '#fff',
        position: 'absolute',
        bottom: 3,
        fontSize: 12, left:5 
    }
  })