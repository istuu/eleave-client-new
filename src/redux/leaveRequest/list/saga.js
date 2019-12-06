
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    LEAVE_LIST_GET_PENDING_LIST,
    LEAVE_LIST_GET_APPROVED_LIST,
    LEAVE_LIST_GET_REJECTED_LIST,
} from '../../actions';

import { serviceAPI } from "../../../constants/defaultValues";

import {
	getLeavePendingListSuccess,
    getLeavePendingListError,
    getLeaveApprovedListSuccess,
    getLeaveApprovedListError,
    getLeaveRejectedListSuccess,
    getLeaveRejectedListError,
} from "./actions";

// Function to get leave url
function getLeaveURL(action) {
    let leaveURL;
    let user_id = localStorage.getItem('user_id');
    let role    = localStorage.getItem('role');
    
    if(role === "admin"){
        leaveURL = serviceAPI + "/api/admin/leave/"+action;
    }else if(role === "director") {
        leaveURL = serviceAPI + "/api/director/"+action;
    }else if(role === "supervisor") {
        leaveURL = serviceAPI + "/api/supervisor/"+action+'/'+user_id;
    }else{
        leaveURL = serviceAPI + "/api/employee/"+action+'/'+user_id;
    }

    return leaveURL
}

// Pending List
const getLeavePendingListRequest = async () => {
    const apiUrl = getLeaveURL("pending");
   
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

//ApprovedList
const getLeaveApprovedListRequest = async () => {
    const apiUrl = getLeaveURL("accept");

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

function* getLeaveApprovedListItems() {
	try {
	  const response = yield call(getLeaveApprovedListRequest);
	  yield put(getLeaveApprovedListSuccess(response.body));
	} catch (error) {
	  yield put(getLeaveApprovedListError(error));
	}
}

export function* watchGetApprovedList() {
	yield takeEvery(LEAVE_LIST_GET_APPROVED_LIST, getLeaveApprovedListItems);
}

// Rejected List
const getLeaveRejectedListRequest = async () => {
    const apiUrl = getLeaveURL("reject");

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

function* getLeaveRejectedListItems() {
	try {
	  const response = yield call(getLeaveRejectedListRequest);
	  yield put(getLeaveRejectedListSuccess(response.body));
	} catch (error) {
	  yield put(getLeaveRejectedListError(error));
	}
}

export function* watchGetRejectedList() {
	yield takeEvery(LEAVE_LIST_GET_REJECTED_LIST, getLeaveRejectedListItems);
}
  
export default function* rootSaga() {
	yield all([
        fork(watchGetPendingList),
        fork(watchGetApprovedList),
        fork(watchGetRejectedList)
    ]);
}