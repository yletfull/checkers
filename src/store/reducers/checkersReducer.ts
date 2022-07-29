import { CheckersState, CheckerAction, CheckersActionTypes } from '../../types/checkers';

const initialState: CheckersState = {
    selectedChecker: {},
}

export function CheckersReducer (state = initialState, action: CheckerAction): CheckersState {
    switch(action.type) {
        case CheckersActionTypes.SET_SELECTED_CHECKER:
            return {
                ...state,
                selectedChecker: action.payload,
            }
        default: 
            return state
    }
}