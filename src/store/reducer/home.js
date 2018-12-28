import * as actionTypes from '../actions/actionTypes';
console.log('masuk reducer');

let initialState = {
    namaTeam : null,
    loading : false,
    manager : null,
    stadion : null,
    img : null,
    logo : null
}
const dataHome = (state=initialState,action) =>{
    console.log('masuk reducer');
    
switch (action.type) {
    case actionTypes.FETCH_HOME_START:
    console.log('masuk reducer home start')
        return {
        ...state, loading : true
        }
    case actionTypes.FETCH_HOME_SUCCESS:
    console.log(action.payload)
    console.log(action.payload.teams[0].strManager);
    
        return {
            ...state, loading : false,
            namaTeam : action.payload.teams[0].strTeam,
            manager : action.payload.teams[0].strManager,
            stadion : action.payload.teams[0].strStadium,
            img : action.payload.teams[0].strStadiumThumb,
            logo : action.payload.teams[0].strTeamLogo
        }
    case actionTypes.FETCH_HOME_FAIL:
        return state;
    default:
        return state;
}
}

export default dataHome;