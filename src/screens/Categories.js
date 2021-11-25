import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {filterMovie} from '../actions/MovieAction';
import VerticalList from '../components/VerticalList';
import _ from 'lodash';
import Header from '../components/homeHeader';

class Categories extends Component {
    render(){
        const navigation = this.props.navigation;
        const route = this.props.route;
        return(
            <View style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <Header route={this.props.route} navigation={this.props.navigation} />
                <VerticalList title={this.props.route.params.genera} data={this.props.route.params.data} navigation={this.props.navigation}/>
            </View>
        )
    }
};

const mapStateToProps = (state) =>{
    
    // const movies= _.map(state.movie.filteredMovie,(val,uid)=>{
    //     return {...val, uid}
    // });

    return {
        movies: state.movie.filteredMovie
    }
}

export default connect(mapStateToProps, { filterMovie })(Categories);