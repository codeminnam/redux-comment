import axios from 'axios';

export const getComments = async () => {
    const response = await axios.get('http://localhost:4000/comments');
    return response.data;
};

export const getCommentById = async id => {
    const response = await axios.get(`http://localhost:4000/comments/${id}`);
    return response.data;
};