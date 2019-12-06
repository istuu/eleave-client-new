
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    USER_GET_TYPE_LEAVE,
    USER_GET_LEAVE_SUMMARY,
} from '../actions';

import { serviceAPI } from "../../constants/defaultValues";

import {
	getUserTypeLeaveSuccess,
    getUserTypeLeaveError,

    getUserLeaveSummarySuccess,
    getUserLeaveSummaryError,
} from "./actions";

// User Type Leave
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


// User Leave Summary
const getUserLeaveSummaryRequest = async (employeeID) => {
    const apiUrl = serviceAPI + "/api/user/summary/" + employeeID;

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

function* getUserLeaveSummary({payload}) {
	try {
      const { employeeID } = payload;      
	  const response = yield call(getUserLeaveSummaryRequest, employeeID);
	  yield put(getUserLeaveSummarySuccess(response.body));
	} catch (error) {
	  yield put(getUserLeaveSummaryError(error));
	}
}

export function* watchGetUserLeaveSummaryList() {
	yield takeEvery(USER_GET_LEAVE_SUMMARY, getUserLeaveSummary);
}
  
export default function* rootSaga() {
	yield all([
        fork(watchGetUserTypeLeaveList),
        fork(watchGetUserLeaveSummaryList)
    ]);
}