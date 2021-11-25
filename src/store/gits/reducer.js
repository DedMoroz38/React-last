import { GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_FAILURE } from './action';

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

const initialState = {
    request: STATUSES.IDLE,
    error: false,
    error_message: '',
    loading: false,
    articles: {}
};

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                error: false,
                loading: true,
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                request: STATUSES.SUCCESS,
                loading: false,
            };
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error_message: action.payload,
                error: true,
                loading: false,
            };
        default:
            return state;
    }
};
export default gistsReducer;