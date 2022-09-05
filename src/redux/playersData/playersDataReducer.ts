// types
import { IPlayersDataState, IPlayersDataActions, DictType } from "../types";

const initialState: IPlayersDataState = {
    dataDictionary: {},
    roleDictionary: {},
    lifeStatDictionary: {} // TODO: use this instead of full player data object
};

const getList = (n: number): number[] => {
    let list = [];
    for (let i = 0; i < n; i++) list.push(i);
    return list;
};

const shuffleIndexedList = (arr: number[]): number[] => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
    return arr;
};

const shuffle = (players: string[], ids: number[]): DictType => {
    const shuffledIndecies = shuffleIndexedList(getList(players.length));
    const dict: DictType = {};
    for (let i = 0; i < players.length; i++) {
        dict[players[i]] = ids[shuffledIndecies[i]];
    }
    return dict;
};

const playersDataReducer = (
    state = initialState,
    action: IPlayersDataActions
) => {
    switch (action.type) {
        case "CREATE_ROLE_DICTIONARY":
            const roleDictionary_create: DictType = {};
            action.payload.forEach((player: string) => {
                roleDictionary_create[player] = "";
            });
            return { ...state, roleDictionary: roleDictionary_create };
        case "CREATE_DATA_DICTIONARY":
            const dataDictionary: DictType = {};
            action.payload.forEach((player: string) => {
                dataDictionary[player] = {
                    text: "",
                    alive: true,
                    unmute: true,
                };
            });
            return { ...state, dataDictionary };
        case "UPDATE_ROLE_DICTIONARY":
            const { players, characters } = action.payload;
            const roleDictionary_update: DictType = shuffle(
                players,
                characters
            );
            return { ...state, roleDictionary: roleDictionary_update };
        case "CHANGE_DATA_DICTIONARY":
            const { player, data } = action.payload;
            return {
                ...state,
                dataDictionary: { ...state.dataDictionary, [player]: data },
            };
        case "EDIT_PLAYER_DATA":
            const { prevKey, newKey } = action.payload;
            const newDataDictionary: DictType = state.dataDictionary;
            const newRoleDictionary: DictType = state.roleDictionary;
            newDataDictionary[newKey] = {
                ...state.dataDictionary[prevKey],
                alive: true,
                unmute: true,
            };
            newRoleDictionary[newKey] = state.roleDictionary[prevKey];
            delete newDataDictionary[prevKey];
            delete newRoleDictionary[prevKey];
            return {
                ...state,
                dataDictionary: { ...newDataDictionary },
                roleDictionary: { ...newRoleDictionary },
            };
        default:
            return state;
    }
};

export default playersDataReducer;
