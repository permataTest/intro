import * as actionTypes from './actionTypes';
import axios from '../../axios-team';

export const homeStart = () => {
    return{
        type: actionTypes.FETCH_HOME_START
    };
};

export const homeSuccess = (datahome) => {
    return {
        type : actionTypes.FETCH_HOME_SUCCESS,
        payload : datahome
    };
};

export const homeFail = (error) => {
    return {
        type : actionTypes.FETCH_HOME_FAIL,
        payload : error
    };
};

export const getDataHome = () => {
    return (dispatch) =>{
        dispatch(homeStart());
        axios({
              method:'get'
            })
            .then((response) => {
                console.log(response)
                dispatch(homeSuccess(response.data))
            })
            .catch((error) => {
                console.log(error)
                dispatch(homeFail(error.response))
            })
        }
}