import { IPlayersActions, IPlayersState } from "../types";

const initialState: IPlayersState = {
    names: [],
    playersCount: 0,
};

const playersReducer = (state = initialState, action: IPlayersActions) => {
    switch (action.type) {
        case "SET_PLAYERS_COUNT":
            return { ...state, playersCount: Number(action.payload) };
        case "ADD_NAME":
            return { ...state, names: [...state.names, action.payload] };
        case "RESET_NAMES":
            return { ...state, names: [] };
        default:
            return state;
    }
};

export default playersReducer;
