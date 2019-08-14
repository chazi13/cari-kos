import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Paragraph, Button } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const city = this.props.navigation.getParam('city', '');
    this.state = {
      search: city
    }
  }

  renderItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    return (
      <View keys={index} style={styles.cardContainer}>
        <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigate('Detail')}>
          <Image
            source={require('../../assets/kamarkos.jpg')}
            style={styles.imageIcon} />
          <TouchableHighlight style={styles.starIconContainer} >
            <View>
              <Icon name="ios-star-outline" style={{ color: '#fff' }} size={24} />
            </View>
          </TouchableHighlight>
          <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 0 }}>
            <Text style={[styles.textDefault, {color: '#673AB7'}]}>Campur</Text>
            <Text style={[styles.textDefault, styles.textSeparator]}>-</Text>
            <Text style={[styles.textDefault, {color: '#4CAF50'}]}>Ada 2 Kamar</Text>
            <Text style={[styles.textDefault, styles.textSeparator]}>-</Text>
            <Text style={[styles.textDefault]}>Pademangan</Text>
          </View>
          <Text style={styles.textPrice}>Rp. 500.000</Text>
          <Paragraph style={styles.kostName}>
            Kost Gaby Pademangan Jakarta Utara
          </Paragraph>
          <View style={{ flexDirection: 'row', }}>
            <Icon name="ios-clock" style={{ color: '#FFC107' }} size={13} />
            <Text style={styles.textUpdated}>
              Update 3 hari lalu
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  handleChangeText = (text) => {
    this.setState({
      search: text
    });
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
        <View style={styles.searchBar}>
          <View style={{ flex: 1, position: 'relative' }}>
            <TextInput
              style={styles.seactInput}
              value={this.state.search}
              onChangeText={this.handleChangeText}
              autoFocus={true}
            />
              <TouchableOpacity style={styles.touchable} onPress={() => navigate('Main')}>
              <Icon style={{ textAlign: 'center', paddingTop: 1 }} name='ios-arrow-back' color='#03A9F4' size={30}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <FlatList
            data={cars}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.floatingContainer}>
          <View style={styles.floatingSection}>
            <View style={{borderRightColor: "#ddd", borderRightWidth: 1}}>
              <Button mode="text" style={styles.buttonOptions} uppercase={false} color="#03a9f4" icon={({size, color}) => (
                <Image
                  source={require('../../assets/images/controls.png')}
                  style={{width: size, height: size, tintColor: color}} />
              )}>
                <Text style={{fontSize: 10}}>Filter</Text>
              </Button>
            </View>
            <View>
              <Button mode="text" style={styles.buttonOptions} uppercase={false} color="#03a9f4" icon="sort">
                <Text style={{fontSize: 10}}>Urutkan</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default withNavigation(ListItem);

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
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
    paddingHorizontal:40, 
    padding:5, 
    height: 40, 
    borderRadius: 5, 
    borderColor: '#03A9F4' , 
    backgroundColor: '#fff', 
    borderWidth: 1 
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
  cardContainer: {
    marginBottom: 10, 
    marginTop: 10 
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
  },
  floatingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    backfaceVisibility: "hidden",
    position: 'absolute',                                          
    bottom: 30,
    left: 50, 
    right: 50
  },
  floatingSection: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 3,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonOptions: {
    padding: 0,
  }
})