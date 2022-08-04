import { Dispatch } from 'redux';
import { OptionsAction, OptionsActionsTypes, OptionsPayload } from '../../types/options';

export const setOptions = (payload: OptionsPayload) => (dispatch: Dispatch<OptionsAction>) => {
    dispatch({
        type: OptionsActionsTypes.SET_OPTION,
        payload,
    })
}