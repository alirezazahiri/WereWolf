import { DictType } from "../types";

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
    characters: (number | string)[]
) => ({
    type: "UPDATE_ROLE_DICTIONARY",
    payload: { players, characters },
});

export const changeDataDictionary = (player: string, data: DictType) => ({
    type: "CHANGE_DATA_DICTIONARY",
    payload: { player, data },
});

export const editPlayerData = (prevPlayer: string, player: string) => ({
    type: "EDIT_PLAYER_DATA",
    payload: { prevKey: prevPlayer, newKey: player },
});
/* for more features we
  need to update the text to an object of player's options
*/
