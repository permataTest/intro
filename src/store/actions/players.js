import * as actionTypes from './actionTypes';
import axios from 'axios';

export const playerStart = () =>{
    return{
        type: actionTypes.FETCH_PLAYERS_START
    };
};

export const playerSuccess = (players) =>{
    return{
        type: actionTypes.FETCH_PLAYERS_SUCCESS,
        payload: players
    };
};

export const playerFail = (players) =>{
    return{
        type: actionTypes.FETCH_PLAYERS_FAIL,
        payload: players
    };
};

export const getDataPlayers = () => {
    return (dispatch) =>{
        dispatch(playerStart());
        axios({
            method: 'GET',
            url: 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal'
        })
        .then (res =>{
            console.log(res.data);
            dispatch(playerSuccess(res.data))
            
        })
        .catch(error =>{
            console.log(error);
            dispatch(playerFail(error))
        });
    }
}


