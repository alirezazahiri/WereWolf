import { CharType, ICharactersActions, ICharactersState } from "../types";

const initialState: ICharactersState = {
    characters: [],
};

export const countOfCharacter = (characters: number[], charID: number) => {
    return characters.filter((id) => id === charID).length;
};

const removeCharacter = (characters: number[], character: CharType) => {
    const index = characters.findIndex((id) => id === character.id);
    return characters.filter((id, idx) => idx !== index);
    
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
            if (countOfCharacter(state.characters, action.payload) > 0)
                return {
                    ...state,
                    characters: removeCharacter(
                        state.characters,
                        action.payload
                    ),
                };
            return state;
        case "RESET_CHARACTERS": 
                return {
                    ...state,
                    characters: []
                }
        default:
            return state;
    }
};

export default charactersReducer;
