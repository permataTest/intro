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
            state.dataPlayer = action.payload.player
            return state;
        case actionTypes.FETCH_PLAYERS_FAIL:
            state.dataPlayer = action.payload.player
            return {...state, error: true};
        default:
            return state;
    }
}

export default reducer;