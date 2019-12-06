
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    LEAVE_REQUEST_DELETE,
} from '../../actions';

import { serviceAPI } from "../../../constants/defaultValues";

import {
	deleteLeaveRequestSuccess,
    deleteLeaveRequestError,
} from "./actions";


// Delete leave requst
const deleteLeaveRequestRequest = async (leave_request_id) => {
    const apiUrl = serviceAPI + "/api/employee/leave/" + leave_request_id;
   
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

function* deleteLeaveRequestItems() {
	try {
	  const response = yield call(deleteLeaveRequestRequest);
	  yield put(deleteLeaveRequestSuccess(response.body));
	} catch (error) {
	  yield put(deleteLeaveRequestError(error));
	}
}

export function* watchDeleteLeave() {
	yield takeEvery(LEAVE_REQUEST_DELETE, deleteLeaveRequestItems);
}
  
export default function* rootSaga() {
	yield all([
        fork(watchDeleteLeave),
    ]);
}