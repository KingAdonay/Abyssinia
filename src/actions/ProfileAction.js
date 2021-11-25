import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import { USER_FETCH_SUCCESS } from './types';

export const fetchUser = () => {
    const user = auth().currentUser;
    if (user) {
        return (dispatch) => {
            database().ref(`Subscriber/${user.uid}`).on('value', (snapshot) => {
                dispatch({
                    type: USER_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
        }
    } else {
        console.log(user, 'error net');
    }
};