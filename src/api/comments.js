import axios from 'axios';

export const getComments = async () => {
    const response = await axios.get('http://localhost:4000/comments');
    return response.data;
};

export const getCommentsByPage = async () => {
    const response = await axios.get(`http://localhost:4000/comments?_page=2&_limit=5`);
    return response.data;
};