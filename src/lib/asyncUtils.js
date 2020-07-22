export const reducerPageUtils = {
    initial: (data = null) => ({
        loading: false,
        data,
        error: null,
        page: 1
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
        page: prevState
    }),
    success: payload => ({
        loading: false,
        data: payload.pageComments,
        error: null,
        page: payload.page
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error,
        page: 1
    })
}

export const reducerCommentsUtils = {
    initial: (data = null) => ({
        loading: false,
        data,
        error: null,
        length: null
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
        length: prevState
    }),
    success: (prevState = null, payload) => ({
        loading: false,
        data: payload,
        error: null,
        length: ((prevState === payload.length) ? prevState : payload.length)
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error,
        length: null
    })
}

export const reducerCommentUtils = {
    initial: (data = null) => ({
        loading: false,
        data,
        error: null,
        page: null
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
        page: prevState
    }),
    success: payload => ({
        loading: false,
        data: payload,
        error: null,
        page: payload.page
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error,
        page: 1
    })
}