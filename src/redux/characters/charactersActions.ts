import { CharType } from "../types";

export const increaseCharacter = (
    character: CharType,
    MAX_ALLOWED: number
) => ({
    type: "INCREASE_CHARACTER",
    payload: { max: character.max, id: character.id, MAX_ALLOWED },
});

export const decreaseCharacter = (character: CharType) => ({
    type: "DECREASE_CHARACTER",
    payload: character,
});

export const resetCharacters = () => ({
    type: "RESET_CHARACTERS",
});

export const setCharacters = (characters: number[]) => ({
    type: "SET_CHARACTERS",
    payload: characters,
})
