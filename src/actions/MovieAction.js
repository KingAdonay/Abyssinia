import database from '@react-native-firebase/database';
import _ from 'lodash';

import { MOVIE_FETCH_SUCCESS, MOVIE_SEARCHED, TERM_CHANGED, MOVIE_FILTERED, SET_SELECTED_MOVIE } from './types';

export const fetchMovie = () => {
    return (dispatch) => {
        database().ref('Movies').on('value', (snapshot) => {
            dispatch({
                type: MOVIE_FETCH_SUCCESS,
                payload: snapshot.val()
            })
        })
    }
}

export const searchMovie = (term) => {
    return (dispatch) => {
        dispatch({ type: TERM_CHANGED, payload: term })

        database().ref('Movies').orderByChild('title')
            .startAt(term)
            .endAt(term + "\u{F8FF}").on('value', snapshot => {
                dispatch({
                    type: MOVIE_SEARCHED,
                    payload: snapshot.val()
                });
            });
    }
};

export const filterMovie = () => {
    return (dispatch) => {
        // dispatch({type: TERM_CHANGED, payload: term})

        // database().ref('Movies').orderByChild('genra')
        // .startAt(genra).endAt(genra +"\u{F8FF}").on('value', snapshot=>{
        //     dispatch({
        //         type: MOVIE_FILTERED,
        //         payload: snapshot.val()
        //     });
        // });
        database().ref('Movies').on('value', (snapshot) => {
            const movies = _.map(snapshot.val(), (val, uid) => {
                return { ...val, uid }
            });
            const categoriesArr= ['Drama', 'Commedy', 'Rommance', 'Action'];
            
            categoriesArr.forEach(element => {
                const arrMovies = movies.filter((movie) => movie.genra == element);
                dispatch({
                    type: element,
                    payload: arrMovies
                }); 
            });
            
        })
    }
};

export const fetchSeries = () =>{
    return(dispatch)=>{
        database().ref('Movies').on('value', (snapshot) => {
            const movies = _.map(snapshot.val(), (val, uid) => {
                return { ...val, uid }
            });
                const arrMovies = movies.filter((movie) => movie.Type == 'Series');
                dispatch({
                    type: 'Series',
                    payload: arrMovies
                }); 
            });
    }
}

export const setSelectedMovie = (movie) => {
    return (dispatch) => {
        dispatch({
            type: SET_SELECTED_MOVIE,
            payload: movie
        });
    }
};