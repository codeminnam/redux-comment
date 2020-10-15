export const reducerPageCommentsUtils = {
    initial: (data = null) => ({
        loading: false,
        data,
        error: null
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
    }),
    success: payload => ({
        loading: false,
        data: payload.pageComments,
        error: null,
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error,
    })
}

export const reducerCommentsUtils = {
    initial: (data = null) => ({
        loading: false,
        data,
        error: null
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null
    }),
    success: (payload) => ({
        loading: false,
        data: payload.comments,
        error: null
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error
    })
}

export const reducerCommentUtils = {
    initial: (data = null) => ({
        loading: false,
        data,
        error: null,
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
    }),
    success: payload => ({
        loading: false,
        data: payload.comment,
        error: null,
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error,
    })
}

export const formInit = (options) => {

    options = options || {};

    const method = options.method || 'post';
    const data = options.data || {
        id: '',
        profile_url: '',
        author: '',
        content: '',
        createdAt: ''
    };

    return {
        method,
        data
    }

}