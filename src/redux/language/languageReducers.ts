import { ILanguageAtion, ILanguageState } from "../types";

const initialState: ILanguageState = {
    language: "persian",
};

const languageReducer = (state = initialState, action: ILanguageAtion) => {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return { language: action.payload };
        default:
            return state;
    }
};

export default languageReducer;
