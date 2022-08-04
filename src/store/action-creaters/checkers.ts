import { Dispatch } from 'redux';
import { CheckersActionTypes, CheckerAction, Checker, Square } from '../../types/checkers';

export const setSelectedChecker = (checker: Checker) => (dispatch: Dispatch<CheckerAction>) => {
    dispatch({
        type: CheckersActionTypes.SET_SELECTED_CHECKER,
        payload: checker,
    })
}

export const setSelectedSquare = (square: Square) => (dispatch: Dispatch<CheckerAction>) => {
    dispatch({
        type: CheckersActionTypes.SET_SELECTED_SQUARE,
        payload: square,
    })
}