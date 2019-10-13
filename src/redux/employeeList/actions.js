import {
    EMPLOYEE_LIST_GET_LIST,
    EMPLOYEE_LIST_GET_LIST_SUCCESS,
    EMPLOYEE_LIST_GET_LIST_ERROR
} from '../actions';


export const getEmployeeList = () => ({
    type: EMPLOYEE_LIST_GET_LIST
});

export const getEmployeeListSuccess = (items) => ({
    type: EMPLOYEE_LIST_GET_LIST_SUCCESS,
    payload: items
});

export const getEmployeeListError = (error) => ({
    type: EMPLOYEE_LIST_GET_LIST_ERROR,
    payload: error
});