interface IAction {
  type: string;
  payload?: any;
}

export interface ILanguageAtion extends IAction {}
export interface IPlayersActions extends IAction {}
export interface IFilterActions extends IAction {}
export interface ICharactersActions extends IAction {}
export interface IPlayersDataActions extends IAction {}
export interface IPasswordActions extends IAction {}
export interface IDayNightActions extends IAction {}
export interface IExitCardsActions extends IAction {}

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
  characters: number[];
}

export interface IDayNightState {
  isDay: boolean;
}

export interface IExitCardsState {
  cards: number[];
  isFull: boolean;
}

export type DictType = { [player: string]: any };

export interface IPlayersDataState {
  dataDictionary: DictType;
  roleDictionary: DictType;
}
