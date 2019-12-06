import {
    LEAVE_REQUEST_DELETE,
    LEAVE_REQUEST_DELETE_SUCCESS,
    LEAVE_REQUEST_DELETE_LIST_ERROR,
} from '../../actions';


export const deleteLeaveRequest = (leave_request_id) => ({
    type: LEAVE_REQUEST_DELETE,
    payload: leave_request_id
});

export const deleteLeaveRequestSuccess = (result) => ({
    type: LEAVE_REQUEST_DELETE_SUCCESS,
    payload: result
});

export const deleteLeaveRequestError = (error) => ({
    type: LEAVE_REQUEST_DELETE_LIST_ERROR,
    payload: error
});