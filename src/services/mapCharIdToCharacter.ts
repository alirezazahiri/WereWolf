import { CharType } from "../redux/types";
import getChars from "./getPageData";

const mapCharIdToCharacter = (id: number | string, language: string): any => {
    const { characters } = getChars(language);
    return characters.find((ch: CharType) => ch.id === id);
};

export default mapCharIdToCharacter;
