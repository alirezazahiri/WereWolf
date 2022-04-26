export const chooseCard = (id: number, len: number) => ({
  type: "CHOOSE_EXIT_CARD",
  payload: { id, len },
});

export const removeCard = (id: number) => ({
  type: "REMOVE_EXIT_CARD",
  payload: id,
});

export const selectAllCards = (len: number) => ({
  type: "SELECT_ALL_EXIT_CARDS",
  payload: len,
});

export const removeAllCards = () => ({
  type: "REMOVE_ALL_EXIT_CARDS",
});
