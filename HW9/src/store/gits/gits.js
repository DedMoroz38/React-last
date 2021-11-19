const GET_GISTS = 'GISTS::GET_GISTS';
const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS';

const getGists = () => ({
    type: GET_GISTS,
});

const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    Payload: gists,
});

const getAllGists = () => async (dispatch, getState) => {
    const response = await fetch(API_URL_PUBLIC);
    const result = await response.json();
    dispatch(getGistsSuccess(result));
}