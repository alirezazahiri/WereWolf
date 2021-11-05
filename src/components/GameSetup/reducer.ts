interface IAction {
    type: string;
}

interface IState {
    type: string;
    nameEnter: boolean;
    charSelect: boolean;
}

export const initialState: IState = {
    type: "",
    nameEnter: false,
    charSelect: false,
};

const gameSetupReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case "OPEN_CHARACTERS_SELECT_MODAL":
            return {
                type: "charSelect",
                nameEnter: false,
                charSelect: true,
            };
        case "CLOSE_CHARACTERS_SELECT_MODAL":
            return {
                ...state,
                type: "",
                charSelect: false,
            };

        case "OPEN_NAME_ENTER_MODAL":
            return {
                type: "nameEnter",
                nameEnter: true,
                charSelect: false,
            };
        case "CLOSE_NAME_ENTER_MODAL":
            return {
                ...state,
                type: "",
                nameEnter: false,
            };

        default:
            return state;
    }
};

export default gameSetupReducer;
