import { getGistsRequest, getGistsSuccess, getGistsFailure } from './action';

const API_URL_PUBLIC = `https://www.timeapi.io/api/Time/current/zone?timeZone=`;

export const getAllGists = (link) => async (dispatch) => {
    dispatch(getGistsRequest());

    try {
        const res = await fetch(`${API_URL_PUBLIC}${link}`);
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();
        dispatch(getGistsSuccess(result));
    }
    catch (err) {
        dispatch(getGistsFailure(err.message));
    }
};
