import { CharType } from "../redux/types";
import getChars from "./getPageData";

const mapCharIdToCharacter = (
    id: number | string,
    language: string
): CharType | undefined => {
    const { characters } = getChars(language);
    return characters.find((ch: CharType) => ch.id === id);
};

export default mapCharIdToCharacter;
