import {
    LEAVE_LIST_GET_PENDING_LIST,
    LEAVE_LIST_GET_PENDING_LIST_SUCCESS,
    LEAVE_LIST_GET_PENDING_LIST_ERROR,
    LEAVE_LIST_GET_APPROVED_LIST,
    LEAVE_LIST_GET_APPROVED_LIST_SUCCESS,
    LEAVE_LIST_GET_APPROVED_LIST_ERROR,
    LEAVE_LIST_GET_REJECTED_LIST,
    LEAVE_LIST_GET_REJECTED_LIST_SUCCESS,
    LEAVE_LIST_GET_REJECTED_LIST_ERROR
} from '../../actions';


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

export const getLeaveApprovedList = () => ({
    type: LEAVE_LIST_GET_APPROVED_LIST
});

export const getLeaveApprovedListSuccess = (items) => ({
    type: LEAVE_LIST_GET_APPROVED_LIST_SUCCESS,
    payload: items
});

export const getLeaveApprovedListError = (error) => ({
    type: LEAVE_LIST_GET_APPROVED_LIST_ERROR,
    payload: error
});

export const getLeaveRejectedList = () => ({
    type: LEAVE_LIST_GET_REJECTED_LIST
});

export const getLeaveRejectedListSuccess = (items) => ({
    type: LEAVE_LIST_GET_REJECTED_LIST_SUCCESS,
    payload: items
});

export const getLeaveRejectedListError = (error) => ({
    type: LEAVE_LIST_GET_REJECTED_LIST_ERROR,
    payload: error
});