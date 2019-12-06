
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth } from '../../helpers/Firebase';
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER
} from '../actions';

import Swal from 'sweetalert2';
import { serviceAPI } from "../../constants/defaultValues";

import {
    loginUserSuccess,
    registerUserSuccess
} from './actions';

const loginWithEmailPasswordAsync = async (payload) => {
    const apiUrl = serviceAPI + "/api/login";

    return await new Promise((success, fail) => {
        const urlFetch = fetch(apiUrl,{
            method: 'POST',
            body: JSON.stringify(payload)
        });
        urlFetch.then(res => {
            return res.json();
        }).then(resJson => {
            success(resJson);
        });
    })
    .then(response => response)
    .catch(error => error);
}


function* loginWithEmailPassword({ payload }) {
    // const { email, password } = payload.user;
    const { history } = payload;
    try {
        const loginUser = yield call(loginWithEmailPasswordAsync, payload.user);
        const loginData = loginUser.body
        if (loginUser.error === null) {
            localStorage.setItem('user_id', loginData['ID']);
            localStorage.setItem('token', loginData['Token']);
            localStorage.setItem('role', loginData['Role']);
            localStorage.setItem('name', loginData['Name']);
            yield put(loginUserSuccess(loginUser));
            history.push('/');
        } else {
            console.log('login failed :', loginUser.error)
            Swal.fire(
                'Whoops!',
                loginUser.error,
                'error'
            )
        }
    } catch (error) {
        console.log('login error : ', error)
        Swal.fire(
            'Whoops!',
            error,
            'error'
        )
    }
}

const registerWithEmailPasswordAsync = async (email, password) =>
    await auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => authUser)
        .catch(error => error);

function* registerWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    const { history } = payload
    try {
        const registerUser = yield call(registerWithEmailPasswordAsync, email, password);
        if (!registerUser.message) {
            localStorage.setItem('user_id', registerUser.user.uid);
            yield put(registerUserSuccess(registerUser));
            history.pushState(null, '/');
        } else {
            console.log('register failed :', registerUser.message)
        }
    } catch (error) {
        console.log('register error : ', error)
    }
}



const logoutAsync = async (history) => {
    await auth.signOut().then(authUser => authUser).catch(error => error);
    history.push('/')
}

function* logout({payload}) {
    const { history } = payload
    try {
        yield call(logoutAsync,history);
        localStorage.removeItem('user_id');
    } catch (error) {
    }
}



export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}


export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser)
    ]);
}