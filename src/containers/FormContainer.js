import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../components/Form';
import { getComments, getCommentsByPage, postComment, editComment, setCurrentPage, changeForm } from '../store/modules/comments';

function FormContainer() {
    const { form, page } = useSelector(state => state.comments);

    const dispatch = useDispatch();

    const onChangeField = e => {
        dispatch(changeForm(e.target));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (form.method === 'post') {
            await dispatch(postComment(form.data));
            await dispatch(getCommentsByPage());
            await dispatch(getComments());
            await dispatch(setCurrentPage(1));
        } else if (form.method === 'put') {
            await dispatch(editComment(form.data));
            await dispatch(getCommentsByPage(page));
        }
    }
    return (
        <Form form={form} onChangeField={onChangeField} onSubmit={handleSubmit} />
    )
}

export default FormContainer;