import React from 'react';
import styled from "styled-components";

const FormStyle = styled.div`
    & > form {
        padding : 0 10px;
        margin-bottom : 50px;
    }
    & > form > textarea {
        padding : 5px 1%;
        width : 98%;
        height : 50px;
    }
    & > form > input[type=text] {
        padding : 5px 1%;
        width : 98%;
        margin-bottom : 10px;
    }
    & > form > button {
        padding: 0.375rem 0.75rem;
        border-radius: 0.25rem;
        border: 1px solid lightgray;
        cursor : pointer; 
    }
`;

function Form({ form, onChangeField, onSubmit }) {
    return <FormStyle>
        <form onSubmit={onSubmit}>
            <input type="text"
                name="profile_url"
                placeholder="https://picsum.photos/id/1/50/50"
                value={form.data.profile_url}
                onChange={onChangeField}
                required />
            <br />
            <input
                type="text"
                name="author"
                placeholder="작성자"
                value={form.data.author}
                onChange={onChangeField}
            />
            <br />
            <textarea
                name="content"
                placeholder="내용"
                value={form.data.content}
                onChange={onChangeField}
                required></textarea>
            <br />
            <input
                type="text"
                name="createdAt"
                placeholder="2020-11-01"
                value={form.data.createdAt}
                onChange={onChangeField}
                required />
            <br />
            <button type="submit">등록</button>
        </form>
    </FormStyle>
}

export default Form;