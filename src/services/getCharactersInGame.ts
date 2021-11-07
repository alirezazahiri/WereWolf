// services
import getChars from "./getPageData";

// types
import { CharType } from "../redux/types";

const getCharactersInGame = (ids: number[], language: string): CharType[] => {
    const { characters } = getChars(language);
    const charactersInGame = ids.map((id) => characters[id - 1]);
    return charactersInGame;
};

export default getCharactersInGame;
