import { CharType } from "../types";
export const createRoleDictionary = (players: string[]) => ({
    type: "CREATE_ROLE_DICTIONARY",
    payload: players,
});

export const createDataDictionary = (players: string[]) => ({
    type: "CREATE_DATA_DICTIONARY",
    payload: players,
});

export const updateRoleDictionary = (
    players: string[],
    characters: CharType[]
) => ({
    type: "UPDATE_ROLE_DICTIONARY",
    payload: { players, characters },
});

export const changeDataDictionary = (player: string, text: string) => ({
    type: "CHANGE_DATA_DICTIONARY",
    payload: { player, text },
});
/* for more features we
  need to update the text to an object of player's options
*/
