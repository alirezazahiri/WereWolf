export type SuggestionType = {
  id: number;
  en_title: string;
  fa_title: string;
  characters: number[];
};

const suggestions: SuggestionType[] = [
  {
    id: 1,
    en_title: "12x - Mafia Nights",
    fa_title: "شب های مافیا - ۱۲ نفره",
    characters: [1, 2, 3, 4, 6, 8, 15, 34, 36, 36, 37, 48],
  },
  {
    id: 7,
    en_title: "12x - Mafia Nights (Joker)",
    fa_title: "شب های مافیا (جوکر) - ۱۲ نفره",
    characters: [1, 2, 3, 4, 6, 8, 15, 34, 36, 37, 48, 54],
  },
  {
    id: 2,
    en_title: "8x - Mafia Nights",
    fa_title: "شب های مافیا - ۸ نفره",
    characters: [2, 3, 4, 6, 8, 36, 37, 48],
  },
  {
    id: 3,
    en_title: "10x - Godfather Show",
    fa_title: "گادفادرشو - ۱۰ نفره",
    characters: [1, 2, 3, 4, 6, 15, 20, 37, 38, 48],
  },
  {
    id: 4,
    en_title: "13x - Advanced Classic Mafia (WereWolf)",
    fa_title: "مافیا کلاسیک پیشرفته (گرگ نما) - ۱۳ نفره",
    characters: [2, 3, 4, 6, 7, 11, 12, 22, 23, 37, 38, 51, 63],
  },
  {
    id: 5,
    en_title: "15x - Modern Rough-Lover Mafia",
    fa_title: "مافیا مدرن معشوقه - ۱۵ نفره",
    characters: [3, 4, 6, 8, 10, 12, 13, 15, 34, 37, 38, 39, 41, 48, 52],
  },
  {
    id: 6,
    en_title: "6x - Healer-Killer Mafia",
    fa_title: "مافیا هیلر کیلر - ۶ نفره",
    characters: [1, 1, 3, 4, 36, 37],
  },
  {
    id: 8,
    en_title: "12x - Godfather Mafia (Jack)",
    fa_title: "مافیا پدرخوانده (جک اسپارو) - ۱۲ نفره",
    characters: [1, 1, 1, 4, 74, 71, 75, 78, 37, 76, 77, 73],
  },
  {
    id: 9,
    en_title: "12x - Godfather Mafia (Nostradamus)",
    fa_title: "مافیا پدرخوانده (نوستراداموس) - ۱۲ نفره",
    characters: [1, 1, 1, 4, 74, 71, 75, 78, 37, 76, 77, 72],
  },
];

export default suggestions;
