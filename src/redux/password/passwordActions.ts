import { IPasswordActions } from "../types";
import * as CryptoTS from 'crypto-ts';

export const setPassword = (password: string): IPasswordActions => ({
  type: "SET_PASSWORD",
  payload: password,
});
