export const setCountOfPlayers = (count: string) => ({
    type: "SET_PLAYERS_COUNT",
    payload: count,
});

export const addName = (name: string) => ({
    type: "ADD_NAME",
    payload: name,
});

export const editName = (name: string, index: number) => ({
    type: "EDIT_NAME",
    payload: { name, index },
});

export const resetPlayers = () => ({
    type: "RESET_NAMES",
});
