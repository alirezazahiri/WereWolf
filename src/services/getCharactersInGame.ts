import { CharType } from '../redux/types';
import getChars from "./getPageData"

const getCharactersInGame = (ids: number[], language: string): CharType[] => {
    const {characters} = getChars(language)
    const charactersInGame = ids.map((id) => characters[id-1])
    return charactersInGame
}

export default getCharactersInGame