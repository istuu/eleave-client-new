
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    USER_GET_TYPE_LEAVE
} from '../actions';

import { serviceAPI } from "../../constants/defaultValues";

import {
	getUserTypeLeaveSuccess,
    getUserTypeLeaveError,
} from "./actions";

// Pending List
const getUserTypeLeaveRequest = async (employeeID) => {
    const apiUrl = serviceAPI + "/api/user/type-leave/" + employeeID;

    return await new Promise((success, fail) => {
        const urlFetch = fetch(apiUrl);
        urlFetch.then(res => {
            if (res.error !== null)
                return res.json();
        }).then(resJson => {
            success(resJson);
        });
    })
    .then(response => response)
    .catch(error => error);
}

function* getUserTypeLeave({payload}) {
	try {
      const { employeeID } = payload;      
	  const response = yield call(getUserTypeLeaveRequest, employeeID);
	  yield put(getUserTypeLeaveSuccess(response.body));
	} catch (error) {
	  yield put(getUserTypeLeaveError(error));
	}
}

export function* watchGetUserTypeLeaveList() {
	yield takeEvery(USER_GET_TYPE_LEAVE, getUserTypeLeave);
}
  
export default function* rootSaga() {
	yield all([
        fork(watchGetUserTypeLeaveList)
    ]);
}