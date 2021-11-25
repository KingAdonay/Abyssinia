import React, { Component } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMovie, filterMovie, fetchSeries } from '../actions';
import Header from '../components/homeHeader';
import HorizontalList from '../components/horMovList';
import NewMovieList from '../components/newMovieList';
import StringsOfLanguages from '../components/StringsOfLanguages';
import CategoriesList from '../components/CategoriesList';

import { dummyData } from '../constants';

class Home extends Component {

    UNSAFE_componentWillMount(){
        StringsOfLanguages.setLanguage(this.props.language);
        this.props.fetchMovie();
        this.props.filterMovie();
        this.props.fetchSeries();
    }
    render() {          
        const navigation = this.props.navigation;
        const route = this.props.route;
        console.log(this.props.filteredMovie);
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: "white"
                }}
            >
                <Header route={route} navigation={navigation} />
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: 100
                    }}
                >
                    <NewMovieList data={this.props.movies} navigation={navigation} />
                    {/* <HorizontalList data={this.props.movies} title="Continue Watching" navigation={navigation} /> */}
                    <HorizontalList data={this.props.movies} title={StringsOfLanguages.recommended} navigation={navigation} />
                    <HorizontalList data={this.props.dramaMovie} title={StringsOfLanguages.drama} navigation={navigation} />
                    <HorizontalList data={this.props.romanceMovie} title={StringsOfLanguages.rommance} navigation={navigation} />
                    <HorizontalList data={this.props.actionMovie} title={StringsOfLanguages.action} navigation={navigation} />
                    <HorizontalList data={this.props.seriesMovie} title="Series" navigation={navigation} />
                    {/* <CategoriesList data={dummyData.continueWatching} navigation={navigation} /> */}
                </ScrollView>
            </SafeAreaView>
        )
    }
};

const mapStateToProps = state => {
    const movies= _.map(state.movie.movieList,(val,uid)=>{
        return {...val, uid}
    });
    return {
        movies,
        filteredMovie: state.movie.filteredMovie,
        dramaMovie: state.movie.dramaMovie,
        romanceMovie: state.movie.romanceMovie,
        actionMovie: state.movie.actionMovie,
        seriesMovie:state.movie.seriesMovie,
        language: state.auth.language
    }
}

export default connect(mapStateToProps, { fetchMovie, filterMovie, fetchSeries })(Home);