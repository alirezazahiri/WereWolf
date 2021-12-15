export type SuggestionType = { 
    id: number,
    en_title: string,
    fa_title: string,
    characters: number[],
};

const suggestions: SuggestionType[] = [
    {
        /*
         * citizen: simple city - doctor - detective - shield - dentist - mayor
         * mafias: simple mafia - simple mafia - godfather - surgeon
         * 
         */
        id: 1,
        en_title: "12x - Mafia Nights", 
        fa_title: "شب های مافیا - ۱۲ نفره", 
        characters: [1, 2, 3, 4, 6, 8, 15, 34, 35, 35, 36, 47],
    },
    {
        /*
         * citizen: simple city - doctor - detective - shield - dentist - mayor
         * mafias: simple mafia - simple mafia - godfather - surgeon
         * 
         */
        id: 2,
        en_title: "8x - Mafia Nights", 
        fa_title: "شب های مافیا - ۸ نفره", 
        characters: [2, 3, 4, 6, 8, 35, 36, 47],
    },
];

export default suggestions;
