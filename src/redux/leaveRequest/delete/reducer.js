import {
    LEAVE_REQUEST_DELETE,
    LEAVE_REQUEST_DELETE_SUCCESS,
    LEAVE_REQUEST_DELETE_LIST_ERROR,
} from '../../actions';

const INIT_STATE = {
	result:null,
	error: '',
	loading:false
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {

		case LEAVE_REQUEST_DELETE:
			return { ...state, loading: false };

		case LEAVE_REQUEST_DELETE_SUCCESS:
			return { ...state, loading: true, result: action.payload };

		case LEAVE_REQUEST_DELETE_LIST_ERROR:
			return { ...state, loading: true, error: action.payload };

		default: return { ...state };
	}
}
export default reducer;