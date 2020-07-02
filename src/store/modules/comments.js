import * as commentsApi from '../../api/comments';
import { reducerUtils } from '../../lib/asyncUtils';

const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const GET_COMMENT = 'GET_COMMENT';
const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR';

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

export const getComment = id => async dispatch => {
    dispatch({ type: GET_COMMENT, id });
    try {
        const comment = await commentsApi.getCommentById(id);
        dispatch({
            type: GET_COMMENT_SUCCESS,
            comment
        });
    } catch (e) {
        dispatch({
            type: GET_COMMENT_ERROR,
            error: e
        });
    }
}


export const initialState = {
    comments: reducerUtils.initial(),
    comment: reducerUtils.initial()
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
        case GET_COMMENT:
            return {
                ...state,
                comment: reducerUtils.loading()
            };
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                comment: reducerUtils.success(action.comment)
            };
        case GET_COMMENT_ERROR:
            return {
                ...state,
                comment: reducerUtils.error(action.error)
            };
        default:
            return state;

    }

}