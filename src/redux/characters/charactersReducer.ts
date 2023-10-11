// types
import { ICharactersActions, ICharactersState } from "../types";

const initialState: ICharactersState = {
    characters: [],
};

export const countOfCharacter = (characters: number[], charID: number) => {
    return characters.filter((id) => id === charID).length;
};

const removeCharacter = (characters: number[], charID: number) => {
    const index = characters.findIndex((id) => id === charID);
    return characters.filter((_, idx) => idx !== index);
};

const charactersReducer = (
    state = initialState,
    action: ICharactersActions
) => {
    switch (action.type) {
        case "INCREASE_CHARACTER":
            if (
                state.characters.length < action.payload.MAX_ALLOWED &&
                countOfCharacter(state.characters, action.payload.id) <
                    action.payload.max
            )
                return {
                    ...state,
                    characters: [...state.characters, action.payload.id],
                };
            return state;
        case "DECREASE_CHARACTER":
            if (countOfCharacter(state.characters, action.payload.id) > 0)
                return {
                    ...state,
                    characters: removeCharacter(
                        state.characters,
                        action.payload.id
                    ),
                };
            return state;
        case "RESET_CHARACTERS":
            return {
                ...state,
                characters: [],
            };

        case "SET_CHARACTERS":
            return {
                ...state,
                characters: action.payload,
            };
        default:
            return state;
    }
};

export default charactersReducer;
