import { IExitCardsState, IExitCardsActions } from "../types";

const initialState: IExitCardsState = {
  cards: [],
  isFull: false,
};

const exitCardsReducer = (state = initialState, action: IExitCardsActions) => {
  switch (action.type) {
    case "CHOOSE_EXIT_CARD":
      if (!state.cards.includes(action.payload)) {
        const newCards = [...state.cards, action.payload.id];
        return {
          ...state,
          cards: newCards,
          isFull: newCards.length === action.payload.len,
        };
      }
      return state;
    case "REMOVE_EXIT_CARD":
      console.log(state.cards.filter((id) => id !== action.payload))
      if (state.cards.includes(action.payload))
        return {
          ...state,
          cards: state.cards.filter((id) => id !== action.payload),
          isFull: false,
        };
      return state;
    case "SELECT_ALL_EXIT_CARDS":
      const cards = [];
      for (let i = 1; i <= action.payload; i++) cards.push(i);
      return { ...state, cards, isFull: true };
    case "REMOVE_ALL_EXIT_CARDS":
      return { ...state, cards: [], isFull: false };
    default:
      return state;
  }
};

export default exitCardsReducer;
