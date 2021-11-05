import { ILanguageAtion } from "../types";

export const changeLanguage = (language: string): ILanguageAtion => ({
    type: "CHANGE_LANGUAGE",
    payload: language,
});
