import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Button } from "react-native";
import { createBottomTabNavigator, FlatList } from "react-navigation";
import { Searchbar } from 'react-native-paper';





class Explore extends React.Component {
  render() {
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
                        <Image
                        source={require('../../assets/mortgage.png')}
                        style={styles.imageIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <Image
                        source={require('../../assets/buildings.png')}
                        style={styles.imageIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <Image
                        source={require('../../assets/city-hall.png')}
                        style={styles.imageIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <Image
                        source={require('../../assets/swing.png')}
                        style={styles.imageIcon} />
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
                        <Text style={{marginBottom: 10}}>Promo</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{padding:10}}>
                                <View style={{height:120, width:300, marginLeft: 10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/re1.png')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>

                                <View style={{height:120, width:300, marginLeft:10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/re2.png')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>

                                <View style={{height:120, width:300, marginLeft:10, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/re3.png')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>
                                
                            
                            </ScrollView>
                    </View>

                    <View style={{flex:1, }}>
                        <View style={{flex:1, borderWidth: 1, borderColor: '#03A9F4', margin:10, padding:10, borderRadius:5, flexDirection: 'row'}} >
                            <View style={{flex:2}}>
                                <Text style={{color: '#03A9F4', fontSize: 10, fontWeight: 'bold'}}>Anda Pemilik Kost?</Text>
                                <Text style={{color: '#03A9F4', fontSize: 10}}>Masuk atau daftar Disini</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Button
                                title="Login"
                                color="#03A9F4"
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{height:200, backgroundColor: '#FFF', padding: 10}}>
                        <Text style={{marginBottom: 10}}>Kota Populer</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{padding:10}}>
                                <View style={{height:120, width:80, marginLeft: 5, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/jakarta.png')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>

                                <View style={{height:120, width:80, marginLeft: 5, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/bandung.png')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>

                                <View style={{height:120, width:80, marginLeft: 5, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/jogja.png')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>

                                <View style={{height:120, width:80, marginLeft: 5, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/bandung.png')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>

                                <View style={{height:120, width:80, marginLeft: 5, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/jogja.png')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>

                                <View style={{height:120, width:80, marginLeft: 5, borderWidth:0.5, borderColor:"#dddddd", borderColor:10,
                                        borderRadius:5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,}}>
                                    <View style={{flex:2}}>
                                    <Image
                                        source={require('../../assets/jakarta.png')}
                                        style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5}}/>
                                    </View>
                                </View>
                            
                            </ScrollView>
                    </View>
                </View>

            </ScrollView>
       </View>
    
      </View>
      
    )
  }
}

export default Explore;

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
        marginTop:80,
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
          height: 80,
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
        fontSize:15,
        letterSpacing: 1,
        paddingLeft: 0,
      },
      imageLogo: {
        width: 20, 
        height: 20  ,
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