export interface ILanguageAtion {
    type: string;
    payload?: any;
}

export interface ILanguageState {
    language: string
}

export interface IPlayersActions {
    type: string,
    payload?: any
}

export interface IPlayersState {
    playersCount: number
}