import axios from 'axios';

export const getComments = async () => {
    const response = await axios.get('http://localhost:4000/comments');
    return response.data;
};

export const getCommentsByPage = async (page) => {
    const response = await axios.get(`http://localhost:4000/comments?_page=${page}&_limit=5&_order=asc&_sort=id`);
    return response.data;
};

export const postComment = async (data) => {
    const response = await axios.post(`http://localhost:4000/comments`, data);
    return response.data;
}
