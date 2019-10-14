
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    LEAVE_LIST_GET_PENDING_LIST,
} from '../actions';

import { serviceAPI } from "../../constants/defaultValues";

import {
	getLeavePendingListSuccess,
	getLeavePendingListError,
} from "./actions";

const getLeavePendingListRequest = async () => {
    const apiUrl = serviceAPI + "/api/admin/leave/pending";

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

function* getLeavePendingListItems() {
	try {
	  const response = yield call(getLeavePendingListRequest);
	  yield put(getLeavePendingListSuccess(response.body));
	} catch (error) {
	  yield put(getLeavePendingListError(error));
	}
}

export function* watchGetPendingList() {
	yield takeEvery(LEAVE_LIST_GET_PENDING_LIST, getLeavePendingListItems);
}
  
  
export default function* rootSaga() {
	yield all([fork(watchGetPendingList)]);
}