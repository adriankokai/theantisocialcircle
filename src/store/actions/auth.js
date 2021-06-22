import axios from 'axios';
import { BACKEND_URL } from '../utility';
import * as actionTypes from './actionTypes';
import { fetchUser } from './fetchUser';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSucces = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    axios.post(BACKEND_URL + 'rest-auth/logout/', {
        headers: {
            Authorization: `Token ${localStorage.getItem('token')}`
        }
    })
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('token')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(BACKEND_URL + 'rest-auth/login/', {
            email: email,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 36000 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSucces(token));
            dispatch(fetchUser());
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(BACKEND_URL + 'rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 36000 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSucces(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined || null) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSucces(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    }
}