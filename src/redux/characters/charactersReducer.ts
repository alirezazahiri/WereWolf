import { CharType, ICharactersActions, ICharactersState } from "../types";

const initialState: ICharactersState = {
    characters: [],
};

export const countOfCharacter = (characters: CharType[], character: CharType) => {
    return characters.filter((ch) => ch.id === character.id).length;
};

const removeCharacter = (characters: CharType[], character: CharType) => {
    const index = characters.findIndex((ch) => ch.id === character.id);
    return characters.filter((ch, idx) => idx !== index);
    
};

const charactersReducer = (
    state = initialState,
    action: ICharactersActions
) => {
    switch (action.type) {
        case "INCREASE_CHARACTER":
            if (
                state.characters.length < action.payload.MAX_ALLOWED &&
                countOfCharacter(state.characters, action.payload.character) <
                action.payload.character.max
            )
                return {
                    ...state,
                    characters: [...state.characters, action.payload.character],
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
