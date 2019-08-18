import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableHighlight } from "react-native";
import { Paragraph } from "react-native-paper";
import { createBottomTabNavigator } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

import IklanKost from "../../../components/IklanKost";

class TabTwo extends React.Component {
  renderItem = ({ item, index }) => (
    <IklanKost
      data={item}
      index={index}
    />
  )


  render() {
    const kosts = require('../../../../data/kosts.json');

    return (
      <View style={styles.containerHome}>
        <FlatList
          data={kosts}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

export default TabTwo;

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageIcon: {
    flex: 1,
    height: 150,
    borderRadius: 5,
  },
})