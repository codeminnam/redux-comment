import * as commentsApi from '../../api/comments';
import { reducerUtils } from '../../lib/asyncUtils';

const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const GET_PAGE = 'GET_PAGE';
const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
const GET_PAGE_ERROR = 'GET_PAGE_ERROR';

export const getComments = () => async dispatch => {
    dispatch({ type: GET_COMMENTS });
    try {
        const comments = await commentsApi.getComments();
        dispatch({
            type: GET_COMMENTS_SUCCESS,
            comments
        });
    } catch (e) {
        dispatch({
            type: GET_COMMENTS_ERROR,
            error: e
        });
    }
}

export const getCommentsByPage = id => async dispatch => {
    dispatch({ type: GET_PAGE, id });
    try {
        const pageComments = await commentsApi.getCommentsByPage();
        dispatch({
            type: GET_PAGE_SUCCESS,
            pageComments
        });
    } catch (e) {
        dispatch({
            type: GET_PAGE_ERROR,
            error: e
        });
    }
}


export const initialState = {
    comments: reducerUtils.initial(),
    pageComments: reducerUtils.initial()
};


export default function comments(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: reducerUtils.loading()
            };
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: reducerUtils.success(action.comments)
            };
        case GET_COMMENTS_ERROR:
            return {
                ...state,
                comments: reducerUtils.error(action.error)
            };
        case GET_PAGE:
            return {
                ...state,
                pageComments: reducerUtils.loading()
            };
        case GET_PAGE_SUCCESS:
            return {
                ...state,
                pageComments: reducerUtils.success(action.pageComments)
            };
        case GET_PAGE_ERROR:
            return {
                ...state,
                pageComments: reducerUtils.error(action.error)
            };
        default:
            return state;

    }

}