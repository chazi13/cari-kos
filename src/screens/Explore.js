import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Button, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import listItem from './ListItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator, createAppContainer, HeaderStyleInterpolator, createStackNavigator } from "react-navigation";





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
              <View style={[styles.rowLayout, {paddingLeft: 40, paddingRight:40, paddingBottom:5, paddingTop: 10}]}>
                    <TouchableOpacity style={styles.touchable}>
                       <Icon name="bed" size={20} color={'#fff'}></Icon>
                       <Text style={{color: '#fff', fontSize: 10}}>Kos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <Icon name="hotel" size={20} color={'#fff'}></Icon>
                       <Text style={{color: '#fff', fontSize: 10}}>Hotel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <Icon name="store" size={20} color={'#fff'}></Icon>
                       <Text style={{color: '#fff', fontSize: 10}}>Toko</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <Icon name="wallet" size={20} color={'#fff'}></Icon>
                       <Text style={{color: '#fff', fontSize: 10}}>Dompet</Text>
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
                        style={{height:40, marginTop:5}}
                    />
                </View>
                <View style={{height:15, backgroundColor: '#eeeeee'}}>
                
                </View>
                
                <View>
                    <View style={{height:200, backgroundColor: '#FFF', padding: 10}}>
                        <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Promo</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{padding:10}}>
                              <TouchableOpacity >
                              <View style={{height:120, width:300, marginLeft: 10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/traver1.jpg')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>
                              </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={{height:120, width:300, marginLeft:10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/traver2.jpg')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={{height:120, width:300, marginLeft:10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
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
                                <Text style={{color: '#03A9F4', fontSize: 10, fontWeight: 'bold'}}>Anda Pemilik Kost?</Text>
                                <Text style={{color: '#03A9F4', fontSize: 10}}>Masuk atau daftar Disini</Text>
                            </View>
                            <View style={{flex:1}}>
                              <TouchableOpacity>
                                    <View style={{padding: 4, borderColor: '#03A9F4', borderRadius: 5, borderWidth: 1, justifyContent: 'center', alignContent: 'center'}}>
                                        <Text style={{textAlign: 'center',color: '#03A9F4', fontSize: 10 }}>Login</Text>
                                    </View>   
                              </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{height:200, backgroundColor: '#FFF', padding: 10}}>
                        <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Kota Populer</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{padding:10}}>
                                
                               <TouchableOpacity  onPress={() => navigate('listItem')}>
                               <View style={{height:120, width:80, marginLeft: 10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1, position: 'relative'}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/monas.jpg')}
                                        style={{flex:1,  height:null, width:null, borderRadius:5}}/>
                                       
                                    </View>
                                    <Text style={{color: '#fff',position: 'absolute', bottom: 3, fontSize: 10, left:5, }}>Jakarta</Text>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={{height:120, width:80, marginLeft: 10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1, position: 'relative'}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/surabaya.jpg')}
                                        style={{flex:1,  height:null, width:null, borderRadius:5}}/>
                                       
                                    </View>
                                    <Text style={{color: '#fff',position: 'absolute', bottom: 3, fontSize: 10, left:5, }}>Surabaya</Text>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={{height:120, width:80, marginLeft: 10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1, position: 'relative'}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/bandung.jpg')}
                                        style={{flex:1,  height:null, width:null, borderRadius:5}}/>
                                       
                                    </View>
                                    <Text style={{color: '#fff',position: 'absolute', bottom: 3, fontSize: 10, left:5, }}>Bandung</Text>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={{height:120, width:80, marginLeft: 10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1, position: 'relative'}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/padang.jpg')}
                                        style={{flex:1,  height:null, width:null, borderRadius:5}}/>
                                       
                                    </View>
                                    <Text style={{color: '#fff',position: 'absolute', bottom: 3, fontSize: 10, left:5, }}>Padang</Text>
                                </View>
                               </TouchableOpacity>

                               <TouchableOpacity>
                               <View style={{height:120, width:80, marginLeft: 10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1, position: 'relative'}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/semarang.jpg')}
                                        style={{flex:1,  height:null, width:null, borderRadius:5}}/>
                                       
                                    </View>
                                    <Text style={{color: '#fff',position: 'absolute', bottom: 3, fontSize: 10, left:5, }}>Semarang</Text>
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


const ExploreRoute = createStackNavigator(
    {
      Main: {
        screen: Explore,
      },
      listItem: {
        screen: listItem,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

export default ExploreRoute;

const styles = StyleSheet.create({
    textTitleSearch:{
        color: '#fff',
    },
    textTitleSearch2:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
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
    containerHome: {
          flex: 1,
          flexDirection: 'row',
          backgroundColor:'#fff',
          justifyContent: 'center',
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
    ContentExplore: {
    
    
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
      },
      columnItem:{
          flexDirection: 'row',
          paddingRight: 10,
      },
      touchable: {
        alignItems: 'center',
        justifyContent: 'center'
      },
  })