import { CheckersState, CheckerAction, CheckersActionTypes } from '../../types/checkers';

const initialState: CheckersState = {
    selectedChecker: {},
    selectedSquare: {},
}

export function CheckersReducer (state = initialState, action: CheckerAction): CheckersState {
    switch(action.type) {
        case CheckersActionTypes.SET_SELECTED_CHECKER:
            return {
                ...state,
                selectedChecker: action.payload,
            }
        case CheckersActionTypes.SET_SELECTED_SQUARE:
            return {
                ...state,
                selectedSquare: action.payload,
            }
        default: 
            return state
    }
}