import React from 'react';
import styled from "styled-components";

const Comment = styled.div`
    padding: 10px 20px;
    text-align : left;
    vertical-align: center;
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    background-color: #fff;
    &:hover {
        background-color: #f8f8f8;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
    
`;

const CommentContent = styled.div`
    display: flex;
    margin-right: 30px;
	& > img {
        vertical-align : middle;
        margin-right : 10px;
        border-radius: 4px;
        width : 50px;
        height : 50px;
        overflow: hidden;
    }
`;

const CommentInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2px;
`;

const Author = styled.strong`
    font-size: 16px;
    line-height: 1.25;
    color: #212021;
    margin-right: 8px;
    font-weight: 900;
`;

const CreatedAt = styled.div`
    position: relative;
    font-size: 14px;
    line-height: 1.4285714286;
    color: #626162;
    cursor: default;
`;

const Content = styled.p`
    font-size: 16px;
    line-height: 1.25;
    color: #212021;
`;

const Button = styled.div`
    text-align : right;
    margin : 10px 0;
    
    & > a {
        display: inline-block;
        font-size: 14px;
        margin-right : 5px;
        padding: 0.375rem 0.75rem;
        border-radius: 4px;
        border: 1px solid lightgray;
        cursor : pointer; 
    }
    
    & > a:hover {
        background-color: #ffc82c;
        color: #fff;
        border-color: #ffc82c;
    }
    & > a:last-child:hover {
        background-color: #ff0000;
        border-color: #ff0000;
	}
`;

function CommentList({ comments, onEditFormClick, onDeleteClick }) {
    return (
        comments.map(comment =>
            <Comment key={comment.id}>
                <CommentContent>
                    <img src={comment.profile_url} alt="" />
                    <div>
                        <CommentInfo>
                            <Author>
                                {comment.author}
                            </Author>
                            <CreatedAt>
                                {comment.createdAt}
                            </CreatedAt>
                        </CommentInfo>
                        <Content>
                            {comment.content}
                        </Content>
                    </div>
                </CommentContent>
                <Button>
                    <a onClick={() => onEditFormClick(comment.id)}>EDIT</a>
                    <a onClick={() => {
                        if (window.confirm('Delete?')) onDeleteClick(comment.id)
                    }}>DELETE</a>
                </Button>
            </Comment>

        )
    )
}

export default CommentList;