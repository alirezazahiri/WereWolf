import mapCharIdToCharacter from "../../services/mapCharIdToCharacter";

interface ISides {
  [key: string]: number;
}

export const countSides = (characters: number[], language: string) => {
  const charTypes = characters.map(
    (char) => mapCharIdToCharacter(char, language)?.type
  );

  return charTypes.reduce(
    (prev: ISides, current) => ({
      ...prev,
      [current as string]: prev[current as string] + 1,
    }),
    { citizen: 0, mafia: 0, "mid-independent": 0, independent: 0 }
  );
};
