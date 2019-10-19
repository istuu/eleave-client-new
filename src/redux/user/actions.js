import {
    USER_GET_TYPE_LEAVE,
    USER_GET_TYPE_LEAVE_SUCCESS,
    USER_GET_TYPE_LEAVE_ERROR
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