import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsCreaters from '../store/action-creaters';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionsCreaters, dispatch)
}