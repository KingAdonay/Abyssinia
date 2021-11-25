import {
    MOVIE_FETCH_SUCCESS,
    MOVIE_SEARCHED,
    TERM_CHANGED,
    MOVIE_FILTERED,
    SET_SELECTED_MOVIE
} from '../actions/types';

const INITIAL_STATE = {
    movieList: null,
    searchedMovie: null,
    searchTerm: '',
    filteredMovie: null,
    watching: false,
    selectedMovie: null,
    commedyMovie: null,
    dramaMovie: null,
    romanceMovie: null,
    actionMovie: null,
    seriesMovie: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIE_FETCH_SUCCESS:
            return { ...state, movieList: action.payload };
        case TERM_CHANGED:
            return { ...state, searchTerm: action.payload }
        case MOVIE_SEARCHED:
            return { ...state, searchedMovie: action.payload };
        case MOVIE_FILTERED:
            return { ...state, filteredMovie: action.payload };
        case 'Drama':
            return { ...state, dramaMovie: action.payload };
        case 'Commedy':
            return { ...state, commedyMovie: action.payload };
        case 'Rommance':
            return { ...state, romanceMovie: action.payload };
        case 'Action':
            return { ...state, actionMovie: action.payload };
            case 'Series':
            return { ...state, seriesMovie: action.payload };
        case SET_SELECTED_MOVIE:
            return { ...state, watching: true, selectedMovie: action.payload };
        default:
            return state;
    }
};