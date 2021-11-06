import {
    IPlayersDataState,
    IPlayersDataActions,
    CharType,
    DictType,
} from "../types";

const initialState: IPlayersDataState = {
    dataDictionary: {},
    roleDictionary: {},
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

const shuffle = (players: string[], characters: CharType[]): DictType => {
    const shuffledIndecies = shuffleIndexedList(getList(players.length));
    const dict: DictType = {};
    for (let i = 0; i < players.length; i++) {
        dict[players[i]] = characters[shuffledIndecies[i]].id;
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
                dataDictionary[player] = "";
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
            const { player, text } = action.payload;
            return {
                ...state,
                dataDictionary: { ...state.dataDictionary, [player]: text },
            };
        default:
            return state;
    }
};

export default playersDataReducer;
