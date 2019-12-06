import {
    USER_GET_TYPE_LEAVE,
    USER_GET_TYPE_LEAVE_SUCCESS,
	USER_GET_TYPE_LEAVE_ERROR,
	USER_GET_LEAVE_SUMMARY,
    USER_GET_LEAVE_SUMMARY_SUCCESS,
    USER_GET_LEAVE_SUMMARY_ERROR
} from '../actions';


const INIT_STATE = {
	allItems: null,
	items:null,
	summaries:null,
	error: '',
	loading:false,
	summaryloader:false,
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {

		case USER_GET_TYPE_LEAVE:
			return { ...state, loading: false };

		case USER_GET_TYPE_LEAVE_SUCCESS:
			return { ...state, loading: true, allItems: action.payload, items: action.payload };

		case USER_GET_TYPE_LEAVE_ERROR:
			return { ...state, loading: true, error: action.payload };

		case USER_GET_LEAVE_SUMMARY:
			return { ...state, summaryloader: false };

		case USER_GET_LEAVE_SUMMARY_SUCCESS:
			return { ...state, summaryloader: true, summaries: action.payload };

		case USER_GET_LEAVE_SUMMARY_ERROR:
			return { ...state, summaryloader: true, error: action.payload };


		default: return { ...state };
	}
}
export default reducer;