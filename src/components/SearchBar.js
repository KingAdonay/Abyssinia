import React, { Component } from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.backgroundStyle}>
                <Icon name='search' style={styles.iconStyle}/>
                <TextInput onChangeText={(term)=>this.props.searchMovie(term)} placeholder="Search"  style={styles.inputStyle} placeholderTextColor="black"/>
            </View>
        );
    }
}

const styles= {
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop:10
    },
    inputStyle:{
        flex:1,
        fontSize: 18,
        color: 'black'
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
}

export default SearchBar;
