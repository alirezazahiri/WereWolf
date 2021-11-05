import { IPlayersActions, IPlayersState } from "../types";

const initialState: IPlayersState = {
    playersCount: 0,
};

const playersReducer = (state = initialState, action: IPlayersActions) => {
    switch (action.type) {
        case "SET_PLAYERS_COUNT":
            return { ...state, playersCount: action.payload };
        default:
            return state;
    }
};

export default playersReducer
