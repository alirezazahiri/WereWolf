type IState = {
    mafia: boolean;
    citizen: boolean;
    all: boolean;
    independent: boolean;
    "mid-independent": boolean;
};

export const initialState: IState = {
    mafia: false,
    citizen: false,
    all: false,
    independent: false,
    "mid-independent": false,
};

const reducer = (state = initialState, action: string) => {
    switch (action) {
        case "mafia":
            return { ...initialState, mafia: true };
        case "citizen":
            return { ...initialState, citizen: true };
        case "all":
            return { ...initialState, all: true };
        case "independent":
            return { ...initialState, independent: true };
        case "mid-independent":
            return { ...initialState, "mid-independent": true };
        case "reset":
            return { ...initialState };
        default:
            return state;
    }
};

export default reducer;
