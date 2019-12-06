import {
    USER_GET_TYPE_LEAVE,
    USER_GET_TYPE_LEAVE_SUCCESS,
    USER_GET_TYPE_LEAVE_ERROR,

    USER_GET_LEAVE_SUMMARY,
    USER_GET_LEAVE_SUMMARY_SUCCESS,
    USER_GET_LEAVE_SUMMARY_ERROR
} from '../actions';

export const getUserTypeLeave = (employeeID, items) => ({
    type: USER_GET_TYPE_LEAVE,
    payload: {employeeID, items}
});

export const getUserTypeLeaveSuccess = (items) => ({
    type: USER_GET_TYPE_LEAVE_SUCCESS,
    payload: items
});

export const getUserTypeLeaveError = (error) => ({
    type: USER_GET_TYPE_LEAVE_ERROR,
    payload: error
});

export const getUserLeaveSummary = (employeeID, summaries) => ({
    type: USER_GET_LEAVE_SUMMARY,
    payload: {employeeID, summaries}
});

export const getUserLeaveSummarySuccess = (summaries) => ({
    type: USER_GET_LEAVE_SUMMARY_SUCCESS,
    payload: summaries
});

export const getUserLeaveSummaryError = (error) => ({
    type: USER_GET_LEAVE_SUMMARY_ERROR,
    payload: error
});