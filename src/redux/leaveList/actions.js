import {
    LEAVE_LIST_GET_PENDING_LIST,
    LEAVE_LIST_GET_PENDING_LIST_SUCCESS,
    LEAVE_LIST_GET_PENDING_LIST_ERROR
} from '../actions';


export const getLeavePendingList = () => ({
    type: LEAVE_LIST_GET_PENDING_LIST
});

export const getLeavePendingListSuccess = (items) => ({
    type: LEAVE_LIST_GET_PENDING_LIST_SUCCESS,
    payload: items
});

export const getLeavePendingListError = (error) => ({
    type: LEAVE_LIST_GET_PENDING_LIST_ERROR,
    payload: error
});