import { GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_FAILURE } from './action';

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
};

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                request: STATUSES.SUCCESS,
            };
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default gistsReducer;