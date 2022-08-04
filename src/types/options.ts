export enum Options {
    Size = 'size',
}

export enum OptionsActionsTypes {
    SET_OPTION = 'SET_OPTION',
}

export interface OptionsState {
    size?: number,
}

export interface OptionsPayload {
    name: string,
    value: string | number,
}

export interface SetOptionActions {
    type: OptionsActionsTypes.SET_OPTION,
    payload: OptionsPayload,
}

export type OptionsAction = SetOptionActions