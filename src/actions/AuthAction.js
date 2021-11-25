// import firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER,
    LOGOUT_USER,
    CREATE_USER,
    NAME_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    DATE_OF_BIRTH_CHANGED,
    LANGUAGE_CHANGED
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const languageChanged = (text) => {
    return {
        type: LANGUAGE_CHANGED,
        payload: text
    };
};

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};
export const dateOfBirthChanged = (text) => {
    return {
        type: DATE_OF_BIRTH_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const confirmPasswordChanged = (text) => {
    return {
        type: CONFIRM_PASSWORD_CHANGED,
        payload: text
    }
}

export const logout = () => {
    // AsyncStorage.removeItem('token');
    // _removeData();
    return (dispatch) => {
        dispatch({ type: LOGOUT_USER });
    };
}

// _storeData = async (id) => {
//     try {
//         await AsyncStorage.setItem(
//             'id', id
//         );
//     } catch (error) {
//         console.log(error)
//     }
// };

// _removeData = async () => {
//     try {
//         await AsyncStorage.removeItem('id');
//     } catch (error) {
//         console.log(error)
//     }
// };

export const loginUser = ({ email, password }) => {
    return (dispatch) => {

        if (email && password) {
            dispatch({ type: LOGIN_USER });
            auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    loginUserSuccess(dispatch, user);
                    //  _storeData(user.user.uid);
                    
                })
                .catch(() => {
                    loginUserFailed(dispatch);
                });
        } else {
            alert('Please Fill the Empity Field!');
        }
    };
};

export const signUp = ({ email, password, fullName, dateOfBirth, passwordConfirm, language }) => {
    return (dispatch) => {
        if (email && password) {
            if (fullName && dateOfBirth) {
                if (password == passwordConfirm) {
                    dispatch({ type: LOGIN_USER });
                    auth().createUserWithEmailAndPassword(email, password)
                        .then((user) => {
                            database().ref(`/Subscriber/${user.user.uid}`).set({
                                fullName: fullName,
                                email: email,
                                dateOfBirth: dateOfBirth,
                                languagee: language,
                                favorite: [{ movieId: "Eregnaye" }, { movieId: "movie01" }],
                                watchList: [{ movieId: "movie02" }, { movieId: "movie01" }],
                                subscription: { planType: "Premium", expirationDate: 123456 }
                            }).then(() => {
                                // AsyncStorage.setItem('token', user.user.uid);
                                loginUserSuccess(dispatch, user);
                            }).catch((error) => console.log(error));
                        })
                        .catch((err) => {
                            console.log(err)
                            loginUserFailed(dispatch)
                        });
                } else {
                    alert("Passwords don't match!");
                }
            } else {
                alert('full name and date please')
            }
        } else {
            alert('Please Fill the Empity Field!');
        }
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};


const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    });
};