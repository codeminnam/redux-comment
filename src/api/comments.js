import axios from 'axios';

export const getComments = async () => {
    const response = await axios.get('http://localhost:4000/comments');
    return response.data;
};

export const getCommentById = async (id) => {
    const response = await axios.get(`http://localhost:4000/comments?id=${id}`);
    return response.data;
};

export const getCommentsByPage = async (page) => {
    const response = await axios.get(`http://localhost:4000/comments?_page=${page}&_limit=5&_order=asc&_sort=id`);
    return response.data;
};

export const postComment = async (data) => {
    const response = await axios.post(`http://localhost:4000/comments`, data);
    return response.data;
};

export const editComment = async (data) => {
    const response = await axios.put(`http://localhost:4000/comments/${data.id}`, data);
    return response.data;
}

export const deleteComment = async (id) => {
    const response = await axios.delete(`http://localhost:4000/comments/${id}`);
    return response.data;
}