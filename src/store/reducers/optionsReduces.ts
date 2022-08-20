import { OptionsAction, OptionsActionsTypes, OptionsState } from '../../types/options';

const initialState: OptionsState = {
    size: 50,
}

export function OptionsReducer (state = initialState, action: OptionsAction): OptionsState {
    switch(action.type) {
        case OptionsActionsTypes.SET_OPTION:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        default: 
            return state
    }
}