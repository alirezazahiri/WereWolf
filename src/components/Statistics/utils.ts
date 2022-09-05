import mapCharIdToCharacter from "../../services/mapCharIdToCharacter";

interface ISides {
  [key: string]: number;
}

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
) => {
  let charTypes: (string | undefined)[] = [];
  if (updatable && options) {
    const { dataDictionary, roleDictionary } = options;
    Object.entries(dataDictionary).forEach(([playerName, stat]) => {
      if (stat.alive) {
        charTypes.push(
          mapCharIdToCharacter(roleDictionary[playerName], language)?.type
        );
      }
    });
  } else {
    charTypes = characters.map(
      (char) => mapCharIdToCharacter(char, language)?.type
    );
  }
  return charTypes?.reduce(
    (prev: ISides, current) => ({
      ...prev,
      [current as string]: prev[current as string] + 1,
    }),
    { citizen: 0, mafia: 0, "mid-independent": 0, independent: 0 }
  );
};
