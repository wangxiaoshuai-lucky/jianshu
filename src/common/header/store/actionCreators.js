import { actionTypes } from './';
import axios from 'axios';
import { fromJS } from 'immutable';


const createInitItemAction = (data) => ({
    type: actionTypes.INIT_SEARCH_ITEM,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})


export const createFocusAction = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const createBlurAction = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const createMouseChangeAction = (value) => ({
    type: actionTypes.MOUSE_CHANGE,
    value
})

export const createChangePageAction = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})

export const getHeaderList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                dispatch(createInitItemAction(res.data))
            }).catch((err) => {
                console.log(err)
            })
    }
}