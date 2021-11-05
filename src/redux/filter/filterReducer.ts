import { IFilterState, IFilterActions } from "../types";

const initialState: IFilterState = {
    filter: "all",
};

const filterReducer = (state = initialState, action: IFilterActions) => {
    switch (action.type) {
        case "SET_FILTER":
            return { filter: action.payload };
        default:
            return state;
    }
};

export default filterReducer;
