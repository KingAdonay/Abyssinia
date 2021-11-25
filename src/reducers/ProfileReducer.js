import {
    USER_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    userProfile: {fullName:' '}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_FETCH_SUCCESS:
            return {...state, userProfile: action.payload };
        default:
            return state;
    }
};