import {
    EMPLOYEE_LIST_GET_LIST,
    EMPLOYEE_LIST_GET_LIST_SUCCESS,
    EMPLOYEE_LIST_GET_LIST_ERROR
} from '../actions';

const INIT_STATE = {
	allEmployeeItems: null,
	employeeItems:null,
	error: '',
	loading:false
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {

		case EMPLOYEE_LIST_GET_LIST:
			return { ...state, loading: false };

		case EMPLOYEE_LIST_GET_LIST_SUCCESS:
			return { ...state, loading: true, allEmployeeItems: action.payload, employeeItems: action.payload };

		case EMPLOYEE_LIST_GET_LIST_ERROR:
			return { ...state, loading: true, error: action.payload };

		default: return { ...state };
	}
}
export default reducer;