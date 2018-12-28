import * as actionTypes from './actionTypes';

export const deletePlayerStart = () =>{
    return{
        type: actionTypes.DELETE_PLAYERS_START
    };
};

export const deletePlayerSuccess = (player) =>{
    console.log("data new", player);
    
    return{
        type: actionTypes.DELETE_PLAYERS_SUCCESS,
        payload: player
    };
};

export const deletePlayerFail = (player) =>{
    return{
        type: actionTypes.DELETE_PLAYERS_FAIL,
        payload: player
    };
};

export const deleteDataPlayer = (data, id) => {
    return (dispatch) => {  

        dispatch(deletePlayerStart());
        for (let i = 0; i < data.length; i++) {
            if (data[i].idPlayer === id) {
                data.splice(i,1)
                dispatch(deletePlayerSuccess(data))
            }
        }
        console.log(data.length);
        
      
    }
}