import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import MovieBackground from '../components/movieBackground';
import HorMovieList from '../components/horMovList';
import DeatilDescription from '../components/DetailDescription';

import { dummyData, COLORS } from '../constants';

class MovieDetail extends Component {
    render() {
        const route = this.props.route;
        const navigation = this.props.navigation;
        const selectedMovie = route.params.selectedMovie;

        return (
            <ScrollView
                contentContainerStyle={{
                    backgroundColor: COLORS.white,
                    paddingBottome: 100
                }}
            >
                <MovieBackground selectedMovie={selectedMovie} route={route} navigation={navigation} />
                <DeatilDescription selectedMovie={selectedMovie} navigation={navigation} />
                <HorMovieList title="Recommended" data={this.props.movies} navigation={navigation} />
            </ScrollView>
        )
    }
};

const mapStateToProps = state => {
    const movies= _.map(state.movie.movieList,(val,uid)=>{
        return {...val, uid}
    });
    return {
        movies
    }
}

export default connect(mapStateToProps, {})(MovieDetail);