import {actionTypes} from './';

export const createFocusAction = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const createBlurAction = () => ({
    type: actionTypes.SEARCH_BLUR
})