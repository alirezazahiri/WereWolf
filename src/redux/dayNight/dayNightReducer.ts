import { IDayNightActions, IDayNightState } from "../types";

const initialState: IDayNightState = {
  isDay: false,
};

const dayNightReducer = (state = initialState, action: IDayNightActions) => {
  switch (action.type) {
    case "TOGGLE_DAY_NIGHT":
      return { ...state, isDay: !state.isDay };
    default:
      return state;
  }
};

export default dayNightReducer;
