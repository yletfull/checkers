import { Dispatch } from 'redux';
import { CheckersActionTypes, CheckerAction, Checker } from '../../types/checkers';

export const setSelectedChecker = (checker: Checker) => (dispatch: Dispatch<CheckerAction>) => {
    dispatch({
        type: CheckersActionTypes.SET_SELECTED_CHECKER,
        payload: checker,
    })
}