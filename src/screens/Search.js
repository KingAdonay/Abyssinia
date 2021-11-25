import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { searchMovie } from '../actions/MovieAction';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/Feather';
import VerticalList from '../components/VerticalList';

class Search extends Component {
    onChangeTerm(term){
        this.props.searchMovie(term);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <View style={{
                    marginTop: 5
                }}>
                    {/* <SearchBar searchMovie={this.props.searchMovie()} /> */}
                    <View style={styles.backgroundStyle}>
                        <Icon name='search' style={styles.iconStyle} />
                        <TextInput 
                        value={this.props.searchTerm}
                        onChangeText={this.onChangeTerm.bind(this)} 
                        placeholder="Search" style={styles.inputStyle} 
                        placeholderTextColor="black" />
                    </View>
                </View>

                <VerticalList data={this.props.searchedMovie}  navigation={this.props.navigation} />
            </View>
        )
    }
};

const styles = {
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: 'black'
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
}

const mapStateToProps = state => {

    const searchedMovie= _.map(state.movie.searchedMovie,(val,uid)=>{
        return {...val, uid}
    });

    return {
        searchedMovie,
        searchTerm: state.movie.searchTerm,

    }
}

export default connect(mapStateToProps, { searchMovie })(Search);