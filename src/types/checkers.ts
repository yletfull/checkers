export enum CheckersActionTypes {
    SET_SELECTED_CHECKER = 'SET_SELECTED_CHECKER',
}

export interface Checker {
    domEl?: HTMLElement | null,
}

export interface CheckersState {
    selectedChecker: Checker,
}

interface SetSelectedCheckerAction {
    type: CheckersActionTypes.SET_SELECTED_CHECKER,
    payload: Checker,
}

export type CheckerAction = SetSelectedCheckerAction