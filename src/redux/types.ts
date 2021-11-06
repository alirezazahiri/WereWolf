interface IAction {
    type: string;
    payload?: any;
}

export interface ILanguageAtion extends IAction {}
export interface IPlayersActions extends IAction {}
export interface IFilterActions extends IAction {}
export interface ICharactersActions extends IAction {}
export interface IPlayersDataActions extends IAction {}

export interface ILanguageState {
    language: string;
}

export interface IPlayersState {
    playersCount: number;
    names: string[];
}

export interface IFilterState {
    filter: string;
}

export type CharType = {
    id: number;
    icon: string;
    title: string;
    description: string;
    max: number;
    html?: string;
    type: string;
};

export interface ICharactersState {
    characters: CharType[];
}

export type DictType = { [player: string]: string | number };

export interface IPlayersDataState {
    dataDictionary: DictType;
    roleDictionary: DictType;
}
