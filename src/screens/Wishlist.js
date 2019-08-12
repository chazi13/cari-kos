import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { View, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";
import LoginContainer from "./LoginContainer";
import Tab1 from './Tab/TabOne';
import Tab2 from './Tab/TabTwo';


class Wishlist extends React.Component {
  render() {
    return(
      <Container>
        <Tabs style={{backgroundColor: '#03A9F4',borderWidth:0, shadowColor: 'transparent'}}>
          <Tab heading={ <TabHeading style={{backgroundColor: '#03A9F4'}}><Text>Favorit</Text></TabHeading>}>
            <LoginContainer />
            {/* <Tab1 /> */}
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#03A9F4'}}><Text>Dilihat</Text></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default Wishlist;

const styles = StyleSheet.create({
    containerHome: {
          flex: 1,
          backgroundColor:'#fff',
          alignItems: 'center',
          justifyContent: 'center',
      },
  })