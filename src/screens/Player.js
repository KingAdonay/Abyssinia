import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';

import { COLORS } from '../constants';
import Watch from '../components/WatchComponent';

class Player extends Component {
    static navigationOptions = {
        tabBarVisible:false

      };
    render() {
        const route = this.props.route;
        const navigation = this.props.navigation;
        return (
            <View>
                <View>
                    <Watch selectedMovie={this.props.selectedMovie} screen="Watch" navigation={navigation} />
                </View>
            </View>
        )
    }
};

const styles = {
    backgroundVideo: {
        position: 'absolute',
        flex: 1
    }
}

const mapStateToProps = state =>{
    return {
        selectedMovie: state.movie.selectedMovie 
    }
}
export default connect(mapStateToProps, {})( Player );