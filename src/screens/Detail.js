import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet, TouchableOpacity, Dimensions, Share, Image } from "react-native";

import Icon from "react-native-vector-icons";
import { IconButton, Title, Subheading, Paragraph, Appbar } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { withNavigation } from "react-navigation";

import ImageSlider from "../components/ImageSlider";
import Maps from "../components/Maps";

class Detail extends Component {
  constructor() {
    super();
    const width = Dimensions.get('window');
    this.state = {
      isShowImage: true,
      isShowMaps: false,
      showImageColor: "#03A9F4",
      showMapsColor: "white",
      width: width.width,
      isMapReady: false,
      region: {
        latitude: -6.301686,
        longitude: 106.734972,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    }
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Sebarkan kamar kost',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          alert('Kamar kost disebarkan')
        }
      } else if (result.action === Share.dismissedAction) {
        alert('Batal berbagi');
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
      <ImageSlider
        photos={[
          {src: require("../../assets/images/kost1/beranda.jpg")},
          {src: require("../../assets/images/kost1/kamar.jpg")},
        ]}
      />
    )
  }

  _renderShowMpas = () => {
    return (
      <Maps 
        region={{
          latitude: -6.301686,
          longitude: 106.734972,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        height={200}
        title="The kost"
      />
    )
  }

  _goBack = () => {
    alert('go back')
  }

  render() {
    let {navigate, goBack} = this.props.navigation
    return (
      <View style={{flex: 1}}>
        <Appbar.Header style={{backgroundColor: "#03a9f4"}}>
          <Appbar.BackAction onPress={() => goBack()} color="#dfdfdf" />
          <Appbar.Content title="Detail Kost" />
          <Appbar.Action icon="favorite-border" color="#dfdfdf" />
          <Appbar.Action icon="share" color="#dfdfdf" onPress={this.onShare} />
        </Appbar.Header>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.bannerSection}>
            <View style={{ flex: 4, width: this.state.width }}>
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
              <Title style={styles.titleNormalize}>Kost MamiRooms Jatinangor Priwanda Sumedang</Title>
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
            <Subheading style={styles.titleNormalize}>Luas Kamar</Subheading>
            <View style={[styles.floatLeft, styles.justifyCenter, {height: 50}]}>
              <IconButton icon="zoom-out-map" color="#03a9f4" size={30} style={{marginLeft: -0}} />
              <Paragraph style={{marginLeft: 10, marginTop: 12}}>
                3.5 x 4 m
              </Paragraph>
            </View>
          </View>
          <View style={styles.contentSection}>
            <Subheading style={styles.titleNormalize}>Fasilitas Kamar</Subheading>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.InfoContainer, {height: 75, marginLeft: -15}]}>
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
            <Subheading style={styles.titleNormalize}>Deskripsi Kost</Subheading>
            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corporis voluptatibus quasi blanditiis suscipit hic pariatur natus asperiores ullam ducimus, nam consequuntur deleniti dolorum dolores fugiat aliquam harum corrupti dolorem?</Paragraph>
          </View>
          <View style={styles.contentSection}>
            <Subheading style={styles.titleNormalize}>Kost Menarik Lainnya</Subheading>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.InfoContainer]}>
              <TouchableOpacity  onPress={() => navigate('ListItem')}>
                <View style={styles.anotherKostContainer}>
                    <View style={{flex:2}}>
                    <Image
                        source={require('../../assets/kamarkos.jpg')}
                        style={styles.kostImage}/>
                    </View>
                    <Text style={styles.anotherKostName}>Kost Murah di Jakarta</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigate('ListItem')}>
                <View style={styles.anotherKostContainer}>
                    <View style={{flex:2}}>
                    <Image
                        source={require('../../assets/kamarkos.jpg')}
                        style={styles.kostImage}/>
                    </View>
                    <Text style={styles.anotherKostName}>Kost Murah di Jakarta</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigate('ListItem')}>
                <View style={styles.anotherKostContainer}>
                    <View style={{flex:2}}>
                    <Image
                        source={require('../../assets/kamarkos.jpg')}
                        style={styles.kostImage}/>
                    </View>
                    <Text style={styles.anotherKostName}>Kost Murah di Jakarta</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <View style={{flex: 1, justifyContent: "center"}}>
            <Text style={styles.price}>Rp 1.750.000 / bulan</Text>
          </View>
          <View style={[styles.bookContainer, {flex: 1}]}>
            <TouchableOpacity color="#03a9f4" style={[styles.buttonOUtline, {flex: 1, textAlign: "center"}]}>
              <Text style={{textAlign: "center", color: "#03a9f4"}}>Hubungi Kost</Text>
            </TouchableOpacity>
            <TouchableOpacity color="#03a9f4" style={[styles.buttonContained, {flex: 1, textAlign: "center"}]} onPress={() => navigate('Booking')}>
              <Text style={{textAlign: "center", color: "#fff"}}>Booking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#fafafa",
    zIndex: 1
  },
  bannerSection: {
    height: 250,
    flexDirection: "column",
    backgroundColor: Colors.light,
    position: "relative"
  },
  header: {
    backgroundColor: "transparent", 
    // position: "absolute", 
    // zIndex: 99,
    // left: 0, 
    // right: 0, 
    // top: 0,
    flex: 1,
  },
  bannerControlContainer: {
    flexDirection: "row", 
    paddingHorizontal: 15,
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
    flexDirection: "row",
  },
  contentSection: {
    padding: 15,
    alignItems: "flex-start",
    justifyContent: "space-around",
  }, 
  primaryInfo: {
    flex: 4,
    padding: 15,
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
  titleNormalize: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 20
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
  },
  footerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#ddd",
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  price: {
    fontWeight: "bold"
  },
  bookContainer: {
    flexDirection: "row"
  },
  buttonOUtline: {
    alignItems: "center",
    borderColor: "#03a9f4",
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 5,
    paddingVertical: 5,
    justifyContent: "center"
  },
  buttonContained: {
    backgroundColor: "#03a9f4",
    borderRadius: 10,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  anotherKostContainer: {
    height:120, 
    width:200, 
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
  kostImage: {
    flex:1, 
    height:null, 
    width:null, 
    borderRadius:5
  },
  anotherKostName: {
    color: '#fff',
    position: 'absolute',
    bottom: 3,
    fontSize: 16, 
    fontWeight: "600",
    left:5,
    backgroundColor: Colors.dark
  }
});

export default withNavigation(Detail);
