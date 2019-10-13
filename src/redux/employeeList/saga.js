
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    EMPLOYEE_LIST_GET_LIST,
} from '../actions';

import { serviceAPI } from "../../constants/defaultValues";

import {
	getEmployeeListSuccess,
	getEmployeeListError,

} from "./actions";

const getEmployeeListRequest = async () => {
    const apiUrl = serviceAPI + "/api/admin/user";

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

function* getEmployeeListItems() {
	try {
	  const response = yield call(getEmployeeListRequest);
	  yield put(getEmployeeListSuccess(response.body));
	} catch (error) {
	  yield put(getEmployeeListError(error));
	}
}

export function* watchGetList() {
	yield takeEvery(EMPLOYEE_LIST_GET_LIST, getEmployeeListItems);
}
  
  
export default function* rootSaga() {
	yield all([fork(watchGetList)]);
}