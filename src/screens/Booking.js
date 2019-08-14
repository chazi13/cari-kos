import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Appbar } from "react-native-paper";
import { Picker, Button } from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native-gesture-handler';

class Booking extends Component {
  constructor() {
    super();
    let dateNow = new Date(Date.now());
    this.state = {
      date: dateNow,
      show: false,
      duration: 1,
      dateDuration: dateNow.setMonth(dateNow.getMonth()+1) 
    }
  }

  setDate = (event, date) => {
    date = date || this.state.date;
    this.setState({
      show: false,
      date,
    });
  }

  showCalendar = () => {
    this.setState({
      show: true
    });
    this.changeDateDuration();
  }

  changeDuration = (value) =>  {
    this.setState({
      duration: value
    });
    this.changeDateDuration();
  }
  
  changeDateDuration = () => {
    let datePicked = new Date(this.state.date);
    let duration = this.state.duration;
    let dateDuration = datePicked.setMonth(datePicked.getMonth() + duration);

    this.setState({
      dateDuration: dateDuration
    });
  }

  formatDate = (date) => {
    const monthName = [
      "Januari", "Februari", "Maret",
      "April", "May", "Juni", "Juli",
      "Agustus", "September", "Oktober",
      "November", "Desember"
    ];
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth();
    let years = date.getFullYear();

    return day + ' ' + monthName[month] + ' ' + years;
  }

  render() {
    const { show, date, dateDuration } = this.state;

    return (
      <View style={{flex: 1}}>
        <Appbar.Header style={{backgroundColor: "#03a9f4", marginHorizontal: -15}}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} color="#dfdfdf" />
          <Appbar.Content title="Booking" />
        </Appbar.Header>
        <ScrollView style={styles.mainContainer}>
          <View style={[styles.bookContainer, styles.flexLeft]}>
            <View style={{flex: 1, paddingVertical: 10}}>
              <Text style={styles.headingGrey}>Tanggal Masuk</Text>
              <TouchableOpacity onPress={this.showCalendar}>
                <Text style={styles.dateText}>{this.formatDate(date)}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, paddingVertical: 10}}>
              <Text style={styles.headingGrey}>Durasi Sewa</Text>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.duration}
                onValueChange={this.changeDuration.bind(this)}
              >
                <Picker.Item label="1 bulan" value="1" />
                <Picker.Item label="6 bulan" value="6" />
                <Picker.Item label="1 tahun" value="12" />
                <Picker.Item label="2 tahun" value="24" />
                <Picker.Item label="3 tahun" value="36" />
              </Picker>
            </View>
            <View style={{flex: 1, paddingVertical: 10}}>
              <Text style={styles.headingGrey}>Tanggal Masuk</Text>
              <Text style={styles.dateText}>{this.formatDate(dateDuration)}</Text>
            </View>
          </View>
          <View style={[styles.detailKostContainer, styles.flexLeft]}>
            <View style={{flex: 4, alignContent: "stretch"}}>
              <Image
                source={require("../../assets/images/kost1/beranda.jpg")}
                style={{height: 80, width: 100}}
              />
            </View>
            <View style={{flex: 8}}>
              <Text>Kost MamiRooms Jatinangor Priwanda Sumedang</Text>
              <Text style={{fontWeight: "bold", marginTop: 20}}>Rp 1.750.000 / bulan</Text>
            </View>
          </View>
          { show && (
            <DateTimePicker value={date}
              mode="date"
              display="calendar"
              onChange={this.setDate} />
          )}
        </ScrollView>
        <View style={styles.footerContainer}>
          <Button full info block style={{borderRadius: 5}}>
            <Text style={styles.buttonText}>Book</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    flex: 1
  },
  flexLeft: {
    flexDirection: "row"
  },
  bookContainer: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  headingGrey: {
    color: "grey",
    fontSize: 12
  },
  dateText: {
    paddingTop: 4
  },
  detailKostContainer: {
    marginVertical: 15,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 15
  },
  footerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    margin: 5
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
})

export default Booking
