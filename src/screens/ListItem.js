import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TouchableHighlight, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Paragraph, Button } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

import IklanKost from "../components/IklanKost";

const dimensions = Dimensions.get('window');

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const city = this.props.navigation.getParam('city', '');
    this.state = {
      search: city
    }
  }

  renderItem = ({ item, index }) => (
    <IklanKost
      data={item}
      index={index}
    />
  )

  handleChangeText = (text) => {
    this.setState({
      search: text
    });
  }

  render() {
    const kosts = require('../../data/kosts.json');
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
            data={kosts}
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
  touchable: {
    position: 'absolute',
    top:3,
    left: 15,
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