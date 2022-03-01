import { IPasswordActions } from "../types";

export const setPassword = (password: string): IPasswordActions => ({
  type: "SET_PASSWORD",
  payload: password,
});
