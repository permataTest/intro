import * as actionTypes from '../actions/actionTypes';

const initialState = {
    dataPlayer : null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PLAYERS_START:
            return state;
        case actionTypes.FETCH_PLAYERS_SUCCESS:
            state.dataPlayer = action.payload
            return {...state, loading: true};
        case actionTypes.FETCH_PLAYERS_FAIL:
            state.dataPlayer = action.payload
            return {...state, error: true};
        case actionTypes.DELETE_PLAYERS_START:
            return state;
        case actionTypes.DELETE_PLAYERS_SUCCESS:
            state.dataPlayer= action.payload
            return {...state, loading: true};
        case actionTypes.DELETE_PLAYERS_FAIL:
            return {...state, error: true};
        default:
            return state;
    }
}

export default reducer;