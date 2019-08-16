import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { IconButton } from "react-native-paper";

const AllFeatures = require('../../data/fitur.json');

export default class KostFeatures extends Component {
  constructor() {
    super();
  }

  fetchKostFeatures = () => {
    const { features } = this.props;
    let kostFeatures = [];
    for (const fitur of allFeatures) {
      if (features.include(fitur.name)) {
        kostFeatures.push(fitur);
      }
    }
    return kostFeatures;
  }

  renderKostFitur = (item, index) => (
    <View key={index} style={this.props.itemStyle}>
      <IconButton icon={item.icon} color="#03a9f4" size={this.props.size} />
      <Text>{this.props.text ? item.name : ''}</Text>
    </View>
  )

  render() {
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={this.fetchKostFeatures()}
        renderItem={this.renderKostFitur}
        style={this.props.style}
      />
    )
  }
}
