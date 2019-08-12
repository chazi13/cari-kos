import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { Paragraph, Searchbar } from "react-native-paper";
import { withNavigation, createBottomTabNavigator, createAppContainer, HeaderStyleInterpolator, createStackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import Explore from './Explore';
import { TextInput } from "react-native-gesture-handler";


class ListItem extends React.Component {

  renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{ marginBottom: 10, marginTop: 10 }}>
        <TouchableOpacity style={{ position: 'relative' }}>
          <Image
            source={require('../../assets/kamarkos.jpg')}
            style={styles.imageIcon} />
          <TouchableHighlight style={{ position: 'absolute', top: 5, right: 10, color: '#fff' }} >
            <View>
              <Icon name="ios-star-outline" style={{ color: '#fff' }} size={24} />
            </View>
          </TouchableHighlight>
          <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 0 }}>
            <Text style={{ color: '#673AB7', fontSize: 10 }}>Campur</Text>
            <Text style={{ color: '#BDBDBD', fontSize: 10, marginLeft: 5, marginRight: 5, marginBottom: 10 }}>-</Text>
            <Text style={{ color: '#4CAF50', fontSize: 10 }}>Ada 2 Kamar</Text>
            <Text style={{ color: '#BDBDBD', fontSize: 10, marginLeft: 5, marginRight: 5, marginBottom: 10 }}>-</Text>
            <Text style={{ color: '#BDBDBD', fontSize: 10 }}>Pademangan</Text>
          </View>
          <Text style={{ fontWeight: '600', marginTop: -5, fontSize: 12 }}>Rp. 500.000</Text>
          <Paragraph style={{ color: '#757575', fontSize: 10, flex: 1 }}>
            Kost Gaby Pademangan Jakarta Utara
            </Paragraph>
          <View style={{ flexDirection: 'row', }}>
            <Icon name="ios-clock" style={{ color: '#FFC107' }} size={13} />
            <Text style={{ color: '#757575', fontSize: 10, flex: 1, marginLeft: 5, paddingBottom: 5 }}>
              Update 3 hari lalu
                </Text>
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
    }, {
      name: 'Porsche',
      price: 1500,
      id: 2,
    }, {
      name: 'Jaguar',
      price: 300,
      id: 3,
    }];
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.containerHome}>
        <View style={{ paddingTop: 10, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, backgroundColor: '#03A9F4', height: 60, marginBottom: 20, flexDirection: 'row' }}>
          <View style={{ flex: 1, position: 'relative' }}>
            <TextInput
              style={{paddingHorizontal:40, padding:5, height: 40, borderRadius: 5, borderColor: '#03A9F4' , backgroundColor: '#CFD8DC', borderWidth: 1 }}
            />
              <TouchableOpacity style={styles.touchable} onPress={() => navigate('Main')}>
              <Icon style={{ textAlign: 'center', paddingTop: 1 }} name='ios-arrow-back' color='#03A9F4' size={30}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <FlatList
            data={cars}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}

export default ListItem;

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageIcon: {
    flex: 1,
    height: 150,
    borderRadius: 5,
  },
  touchable: {
    position: 'absolute',
    top:3,
    left: 15,
  },
})