import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../components/Form';
import { useInput } from '../hooks/useInput';
import { postComment } from '../store/modules/comments';

function FormContainer() {
    const dispatch = useDispatch();
    const { length } = useSelector(state => state.comments.comments);
    const { form, onChangeField, reset } = useInput();
    const nextItemId = length + 1;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(postComment({
            id: nextItemId,
            profile_url: form.profile_url,
            author: form.author,
            content: form.content,
            createdAt: form.createdAt
        }));
        reset();
    }
    return (
        <Form formValues={form} onChangeField={onChangeField} onSubmit={handleSubmit} />
    )
}

export default FormContainer;