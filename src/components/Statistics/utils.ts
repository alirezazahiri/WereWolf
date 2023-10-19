import { StatType } from ".";
import mapCharIdToCharacter from "../../services/mapCharIdToCharacter";
import { chars_en } from "../../translations/chars/chars-en";

export const countSides = (
  characters: number[],
  language: string,
  updatable?: boolean,
  options?: {
    dataDictionary: {
      [key: string]: {
        alive: boolean;
        mute: boolean;
        text: string;
      };
    };
    roleDictionary: {
      [key: string]: number;
    };
  }
): StatType => {
  let charTypes: (keyof StatType)[] = [];
  if (updatable && options) {
    const { dataDictionary, roleDictionary } = options;
    Object.entries(dataDictionary).forEach(([playerName, stat]) => {
      if (stat.alive) {
        const res = mapCharIdToCharacter(roleDictionary[playerName], language);
        if (res) charTypes.push(res.type as keyof StatType);
      }
    });
  } else {
    charTypes = characters.map(
      (char) => mapCharIdToCharacter(char, language)?.type as keyof StatType
    );
  }
  return charTypes?.reduce(
    (prev: StatType, current) => ({
      ...prev,
      [current as string]: prev[current as keyof StatType] + 1,
    }),
    { citizen: 0, mafia: 0, "mid-independent": 0, independent: 0 }
  );
};

export const sidesCountByCharID = (charIDs: number[]): StatType => {
  const { characters } = chars_en;
  const sides = {
    mafia: 0,
    citizen: 0,
    independent: 0,
    "mid-independent": 0,
  };
  charIDs.forEach(
    (charID) => ++sides[characters[charID - 1].type as keyof typeof sides]
  );
  return sides;
};
