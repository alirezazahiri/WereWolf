import { IPasswordActions } from "../types";

const initialState = {
  password: "",
};

const passwordReducers = (state = initialState, action: IPasswordActions) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default passwordReducers