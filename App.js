<<<<<<< HEAD
import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons";
import { IconButton, Title, Subheading, Paragraph } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      isShowImage: true,
      isShowMaps: false,
      showImageColor: "#03A9F4",
      showMapsColor: "white"
    }
  }

  _showImage = () => {
    this.setState({
      isShowImage: true,
      isShowMaps: false,
      showImageColor: "#03A9F4",
      showMapsColor: "white"
    })
  }

  _showMaps = () => {
    this.setState({
      isShowImage: false,
      isShowMaps: true,
      showImageColor: "white",
      showMapsColor: "#03A9F4"
    })
  }

  _renderShowImage = () => {
    return (
      <Text>Here the image</Text>
    )
  }

  _renderShowMpas = () => {
    return (
      <Text>Here the maps</Text>
    )
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.bannerSection}>
          <View style={{ flex: 4, alignItems: "center", justifyContent: "center"}}>
            {this.state.isShowImage == true ? this._renderShowImage() : this._renderShowMpas()}
          </View>
          <View style={[styles.bannerControlContainer]}>
            <TouchableOpacity style={[styles.buttonBannerController]} onPress={this._showImage}>
              <View style={{flexDirection: "row", flex: 1}}>
                <IconButton icon="image" color={this.state.showImageColor} />
                <Text style={[styles.buttonBannerControllerText, {color: `${this.state.showImageColor}`}]}>Gambar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonBannerController, {alignItems: "flex-start", marginLeft: 50}]} onPress={this._showMaps}>
              <View style={{flexDirection: "row", flex: 1}}>
                <IconButton icon="place" color={this.state.showMapsColor} />
                <Text style={[styles.buttonBannerControllerText, {color: `${this.state.showMapsColor}`}]}>Peta</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.InfoContainer, {marginBottom: 10}]}>
          <View style={styles.primaryInfo}>
            <View style={styles.floatLeft}>
              <Text style={styles.category}>Putri </Text><Text> - </Text><Text style={styles.roomAvaible}>Ada 3 Kamar</Text>
            </View>
            <Title>Kost MamiRooms Jatinangor Priwanda Sumedang</Title>
            <Text style={styles.updated}>Update 10 August 2019 @ 14:32</Text>
          </View>
          <View style={styles.premium}>
            <IconButton icon="star-border" color="#03a9f4" size={30} />
          </View>
        </View>
        <View style={[styles.floatLeft, styles.contentSection, styles.bordered, {height: 50}]}>
          <Text style={{alignItems: "center"}}>Tidak termasuk listrik</Text>
          <Text style={{alignItems: "center"}}>Tidak ada min. bayar</Text>
        </View>
        <View style={styles.contentSection}>
          <Title>Luas Kamar</Title>
          <View style={[styles.floatLeft, styles.justifyCenter, {height: 50}]}>
            <IconButton icon="zoom-out-map" color="#03a9f4" size={30} />
            <Paragraph style={{marginLeft: 10, marginTop: 12}}>
              3.5 x 4 m
            </Paragraph>
          </View>
        </View>
        <View style={styles.contentSection}>
          <Title>Fasilitas Kamar</Title>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.InfoContainer, {height: 75}]}>
            <View style={styles.fiturKostContainer}>
              <IconButton icon="hotel" color="#03a9f4" />
              <Text>Kasur</Text>
            </View>
            <View style={styles.fiturKostContainer}>
              <IconButton icon="wifi" color="#03a9f4" />
              <Text>Wifi</Text>
            </View>
            <View style={styles.fiturKostContainer}>
              <IconButton icon="vpn-key" color="#03a9f4" />
              <Text>Akses Kunci</Text>
            </View>
            <View style={styles.fiturKostContainer}>
              <IconButton icon="hot-tub" color="#03a9f4" />
              <Text>Kamar Mandi</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.contentSection}>
          <Title>Deskripsi Kost</Title>
          <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corporis voluptatibus quasi blanditiis suscipit hic pariatur natus asperiores ullam ducimus, nam consequuntur deleniti dolorum dolores fugiat aliquam harum corrupti dolorem?</Paragraph>
        </View>
        <View style={[styles.contentSection, {height: 150, backgroundColor: Colors.lighter}]}>
          {/* <Title>Hubungi Pemilik</Title> */}
          <Paragraph style={{marginTop: 20}}>Data bisa berubah sewaktu-waktu, tanyakan data saat ini</Paragraph>
          <View style={styles.floatLeft}>
            <IconButton icon="contact-phone" color="#03a9f4" size={100} style={{width: 100, height: 100, paddingTop: 60, marginLeft: 0}} />
            <View style={{paddingTop: 40}}>
              <Subheading>Pemilik Kost</Subheading>
              <Subheading>Endah Fauzi</Subheading>
              <View style={styles.floatLeft}>
                <Paragraph>0812142xxxxx</Paragraph>
                <TouchableOpacity style={[styles.textStandart, {marginLeft: 30}]}>
                  <Text style={{color: '#03a9f4'}}>Minta Nomor</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.white
  },
  bannerSection: {
    height: 250,
    flexDirection: "column",
    backgroundColor: Colors.light
  },
  bannerControlContainer: {
    flexDirection: "row", 
    paddingLeft: 20, 
    paddingRight: 20, 
    flex: 1, 
    backgroundColor: Colors.dark
  },
  buttonBannerController: {
    justifyContent: "center", 
    alignItems: "center", 
    flex: 1,
  },
  buttonBannerControllerText: {
    justifyContent: "center", 
    marginTop: 15, 
  },
  InfoContainer: {
    // height: 200,
    flexDirection: "row",
  },
  contentSection: {
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "space-around",
  }, 
  primaryInfo: {
    flex: 4,
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  category: {
    color: "#f50057"
  },
  roomAvaible: {
    fontSize: 14,
    color: "#00c853"
  },
  kostName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  updated: {
    fontSize: 12,
    color: '#aaa'
  },
  premium: {
    flex: 1,
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  bordered: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    borderTopColor: '#ddd',
    borderTopWidth: 1
  },
  textStandart: {
    fontSize: 14,
    fontWeight: "300"
  },
  floatLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10
  },
  iconColorTheme: {
    margin: 0,
    padding: 0,
    fontSize: 14,
    color: '#03a9f4',
  },
  justifyCenter: {
    justifyContent: "center"
  },
  fiturKostContainer: {
    height: 20,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default Detail;
=======
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, HeaderStyleInterpolator } from "react-navigation";
import Explore from './src/screens/Explore';
import Wishlist from './src/screens/Wishlist';
import Chat from './src/screens/Chat';
import Login from './src/screens/Login';

class App extends React.Component {
  render() {
    return(
      <View style={styles.containerHome}>
          <Text>Explore</Text>
      </View>
    )
  }
}

const navbot = createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'Explore',
      tabBarIcon: ( {tintColor}) =>(
        <Icon name="ios-search" color={tintColor} size={24}/>
      )
    }
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions:{
      tabBarLabel:'Wishlist',
      tabBarIcon: ( {tintColor}) =>(
        <Icon name="ios-heart-empty" color={tintColor} size={24}/>
      )
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions:{
      tabBarLabel:'Chat',
      tabBarIcon: ( {tintColor}) =>(
        <Icon name="ios-chatboxes" color={tintColor} size={24}/>
      )
    }
  },
  Login: {
    screen: Login,
    navigationOptions:{
      tabBarLabel:'Login',
      tabBarIcon: ( {tintColor}) =>(
        <Icon name="ios-person" color={tintColor} size={24}/>
      )
    }
  },
})

export default createAppContainer(navbot);

const styles = StyleSheet.create({
  containerHome: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

>>>>>>> commit1
