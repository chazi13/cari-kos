import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'


export default class TextInputIklan extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        const {placeholder, _handleChange, namaValue, value, keyboardType} = this.props
        return (
            <View>
                <TextInput 
                    style={styles.inputStyle}
                    value={value} 
                    onChangeText={this.props._handleChange(namaValue)} 
                    placeholder={placeholder} 
                    underlineColor="#03A9F4" 
                    underlineColorAndroid="#03A9F4" 
                    selectionColor="#03A9F4" 
                    placeholderTextColor="#D3D3D3"
                    keyboardType={keyboardType || "default"}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        borderWidth: 0,
        backgroundColor: '#fff',
        borderBottomColor: '#03A9F4',
    },
})
