export enum CheckersActionTypes {
    SET_SELECTED_CHECKER = 'SET_SELECTED_CHECKER',
    SET_SELECTED_SQUARE = 'SET_SELECTED_SQUARE'
}

export interface Checker {
    domEl?: HTMLElement | null,
}

export interface Square {
    domEl?: HTMLElement | null,
}

export interface CheckersState {
    selectedChecker: Checker,
    selectedSquare: Square,
}

interface SetSelectedCheckerAction {
    type: CheckersActionTypes.SET_SELECTED_CHECKER,
    payload: Checker,
}

interface SetSelectedSquareAction {
    type: CheckersActionTypes.SET_SELECTED_SQUARE,
    payload: Square,
}

export type CheckerAction = SetSelectedCheckerAction | SetSelectedSquareAction;