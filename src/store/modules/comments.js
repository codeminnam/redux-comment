import * as commentsApi from '../../api/comments';
import { reducerPageCommentsUtils, reducerCommentsUtils, reducerCommentUtils, formInit } from '../../lib/asyncUtils';

const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const GET_COMMENT = 'GET_COMMENT';
const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR';

const GET_PAGE = 'GET_PAGE';
const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
const GET_PAGE_ERROR = 'GET_PAGE_ERROR';

const POST_COMMENT = 'POST_COMMENT';
const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';

const EDIT_COMMENT = 'EDIT_COMMENT';
const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
const EDIT_COMMENT_ERROR = 'EDIT_COMMENT_ERROR';

const DELETE_COMMENT = 'DELETE_COMMENT';
const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const CHANGE_FORM = 'CHANGE_FORM';

export const getComments = () => async dispatch => {
    dispatch({ type: GET_COMMENTS });
    try {
        const comments = await commentsApi.getComments();
        dispatch({
            type: GET_COMMENTS_SUCCESS,
            payload: comments
        });
    } catch (e) {
        dispatch({
            type: GET_COMMENTS_ERROR,
            error: e
        });
    }
};

export const getComment = id => async dispatch => {
    dispatch({ type: GET_COMMENT });
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
};

export const getCommentsByPage = page => async dispatch => {
    dispatch({ type: GET_PAGE });
    try {
        const pageComments = await commentsApi.getCommentsByPage(page);
        dispatch({
            type: GET_PAGE_SUCCESS,
            payload: {
                pageComments,
                page
            }
        });
    } catch (e) {
        dispatch({
            type: GET_PAGE_ERROR,
            error: e
        });
    }
};

export const postComment = form => async dispatch => {
    dispatch({ type: POST_COMMENT });
    try {
        const comment = await commentsApi.postComment(form);
        dispatch({
            type: POST_COMMENT_SUCCESS,
            comment
        })
    } catch (e) {
        dispatch({
            type: POST_COMMENT_ERROR,
            error: e
        })
    }
};

export const editComment = (id, form) => async dispatch => {
    dispatch({ type: EDIT_COMMENT });
    try {
        const comment = await commentsApi.editComment(id, form);
        dispatch({
            type: EDIT_COMMENT_SUCCESS,
            comment
        })
    } catch (e) {
        dispatch({
            type: EDIT_COMMENT_ERROR,
            error: e
        })
    }
};

export const deleteComment = id => async dispatch => {
    dispatch({ type: DELETE_COMMENT });
    try {
        const comment = await commentsApi.deleteComment(id);
        dispatch({
            type: DELETE_COMMENT_SUCCESS,
            comment
        })
    } catch (e) {
        dispatch({
            type: DELETE_COMMENT_ERROR,
            error: e
        })
    }
};

export const setCurrentPage = page => dispatch => {
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: { page }
    });
}

export const changeForm = (target) => dispatch => {
    dispatch({
        type: CHANGE_FORM,
        payload: {
            name: target.name,
            value: target.value,
        }
    });
}

export const initialState = {
    comments: reducerCommentsUtils.initial(),
    pageComments: reducerPageCommentsUtils.initial(),
    comment: reducerCommentUtils.initial(),
    page: 1,
    form: formInit()
};

export default function comments(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: reducerCommentsUtils.loading()
            };
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: reducerCommentsUtils.success(action.payload)
            };
        case GET_COMMENTS_ERROR:
            return {
                ...state,
                comments: reducerCommentsUtils.error(action.error)
            };
        case GET_COMMENT:
            return {
                ...state,
                comment: reducerCommentUtils.loading()
            };
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                comment: reducerCommentUtils.success(action.comment)
            };
        case GET_COMMENT_ERROR:
            return {
                ...state,
                comment: reducerCommentUtils.error(action.error)
            };
        case GET_PAGE:
            return {
                ...state,
                pageComments: reducerPageCommentsUtils.loading()
            };
        case GET_PAGE_SUCCESS:
            return {
                ...state,
                pageComments: reducerPageCommentsUtils.success(action.payload)
            };
        case GET_PAGE_ERROR:
            return {
                ...state,
                pageComments: reducerPageCommentsUtils.error(action.error)
            };
        case POST_COMMENT:
            return {
                ...state,
                comment: reducerCommentUtils.loading()
            }
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                comment: reducerCommentUtils.success(action.comment)
            };
        case POST_COMMENT_ERROR:
            return {
                ...state,
                comment: reducerCommentUtils.error(action.error)
            };
        case EDIT_COMMENT:
            return {
                ...state,
                comment: reducerCommentUtils.loading()
            };
        case EDIT_COMMENT_SUCCESS:
            return {
                ...state,
                comment: reducerCommentUtils.success(action.comment)
            };
        case EDIT_COMMENT_ERROR:
            return {
                ...state,
                comment: reducerCommentUtils.error(action.error)
            };
        case DELETE_COMMENT:
            return {
                ...state,
                comment: reducerCommentUtils.loading()
            };
        case DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                comment: reducerCommentUtils.success(action.comment)
            };
        case DELETE_COMMENT_ERROR:
            return {
                ...state,
                comment: reducerCommentUtils.error(action.error)
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                page: action.payload.page
            }
        case CHANGE_FORM:
            return {
                ...state,
                form: {
                    ...state.form,
                    data: {
                        ...state.form.data,
                        [action.payload.name]: action.payload.value
                    }
                }
            }
        default:
            return state;
    }
}