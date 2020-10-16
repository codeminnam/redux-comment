import React from 'react';
import styled from "styled-components";

const FormStyle = styled.div`
    background-color: #eeeeee;
    padding: 20px;
    border-top: 1px solid lightgray;

    & > form {
        padding : 0 10px;
    }
    & > form > textarea {
        padding : 10px;
        width : 100%;
        height : 50px;
        margin-bottom : 10px;
        border: 1px solid lightgray;
        border-radius: 4px;
    }
    & > form > input[type=text] {
        padding : 10px;
        width : 100%;
        margin-bottom : 10px;
        border: 1px solid lightgray;
        border-radius: 4px;
    }
    & > form > button {
        width: 100%;
        padding: 10px;
        background-color: #fff;
        border: 1px solid lightgray;
        border-radius: 4px;
        cursor : pointer; 
    }
    & > form > button:hover {
        background-color: #ffc82c;
        border-color: #ffc82c;
        color: #fff;
        opacity: 0.7;
    }
    & > form > button:active {
        background-color: #ffc82c;
        border-color: #ffc82c;
        color: #fff;
        opacity: 1;
    }
`;

function Form({ form, onChangeField, onSubmit }) {
    return <FormStyle>
        <form onSubmit={onSubmit}>
            <input type="text"
                name="profile_url"
                placeholder="Image link"
                value={form.data.profile_url}
                onChange={onChangeField}
                required />
            <br />
            <input
                type="text"
                name="author"
                placeholder="Author"
                value={form.data.author}
                onChange={onChangeField}
            />
            <br />
            <textarea
                name="content"
                placeholder="Write your comment here"
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
            <button type="submit">SUBMIT</button>
        </form>
    </FormStyle>
}

export default Form;