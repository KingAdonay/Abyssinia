import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER,
    LOGOUT_USER,
    CREATE_USER,
    DATE_OF_BIRTH_CHANGED,
    NAME_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    LANGUAGE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    fullName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    passwordConfirm: '',
    user: null,
    errorMessage: '',
    loading: false,
    userToken: '',
    language: 'Amharic'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return { ...state, fullName: action.payload, errorMessage: '' };
        case DATE_OF_BIRTH_CHANGED:
            return { ...state, dateOfBirth: action.payload };
        case LANGUAGE_CHANGED:
            return { ...state, language: action.payload };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, errorMessage: '' };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, errorMessage: '' };
        case CONFIRM_PASSWORD_CHANGED:
            return { ...state, passwordConfirm: action.payload, errorMessage: '' }
        case LOGIN_USER:
            return { ...state, loading: true, errorMessage: '' }
        case LOGIN_USER_SUCCESS:
            console.log(action.payload);
            return { ...state, INITIAL_STATE, user: action.payload, loading: false, userToken: 'asdfad' };
        case LOGIN_USER_FAILED:
            return { ...state, INITIAL_STATE, errorMessage: 'Authentication Failed!', loading: false, userToken: null };
        case LOGOUT_USER:
            return { ...state, email: '', password: '', userToken: '', errorMessage: '' }
        case CREATE_USER:
            return { ...state }
        default:
            return state;
    }
};
