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
} from '../actions';


const INIT_STATE = {
	allLeaveItems: null,
	leaveItems:null,
	error: '',
	loading:false
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {

		case LEAVE_LIST_GET_PENDING_LIST:
			return { ...state, loading: false };

		case LEAVE_LIST_GET_PENDING_LIST_SUCCESS:
			return { ...state, loading: true, allLeaveItems: action.payload, leaveItems: action.payload };

		case LEAVE_LIST_GET_PENDING_LIST_ERROR:
			return { ...state, loading: true, error: action.payload };

		case LEAVE_LIST_GET_APPROVED_LIST:
			return { ...state, loading: false };

		case LEAVE_LIST_GET_APPROVED_LIST_SUCCESS:
			return { ...state, loading: true, allLeaveItems: action.payload, leaveItems: action.payload };

		case LEAVE_LIST_GET_APPROVED_LIST_ERROR:
			return { ...state, loading: true, error: action.payload };

		case LEAVE_LIST_GET_REJECTED_LIST:
			return { ...state, loading: false };

		case LEAVE_LIST_GET_REJECTED_LIST_SUCCESS:
			return { ...state, loading: true, allLeaveItems: action.payload, leaveItems: action.payload };

		case LEAVE_LIST_GET_REJECTED_LIST_ERROR:
			return { ...state, loading: true, error: action.payload };

		default: return { ...state };
	}
}
export default reducer;