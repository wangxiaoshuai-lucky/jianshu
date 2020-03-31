import { actionTypes } from './';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INIT_SEARCH_ITEM:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            }); 
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.MOUSE_CHANGE:
            return state.set('mouseIn', action.value);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}