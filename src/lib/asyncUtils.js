export const reducerUtils = {
    initial: (data = null) => ({
        loading: false,
        data,
        error: null,
        length: null,
        page: 1
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
        length: null,
        page: prevState
    }),
    success: payload => ({
        loading: false,
        data: payload,
        error: null,
        length: payload.length,
        page: payload.page
    }),
    error: error => ({
        loading: false,
        data: null,
        error: error,
        length: null,
        page: 1
    })
}