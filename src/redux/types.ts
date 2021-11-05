interface IAction {
    type: string;
    payload?: any;
}

export interface ILanguageAtion extends IAction {}
export interface IPlayersActions extends IAction {}
export interface IFilterActions extends IAction {}

export interface ILanguageState {
    language: string;
}

export interface IPlayersState {
    playersCount: number;
    names: string[];
}

export interface IFilterState {
    filter: string
}
