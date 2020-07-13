import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from '../components/CommentList';
import { getCommentsByPage, editComment, deleteComment } from '../store/modules/comments';


function CommentListContainer() {
  const { data, loading, error } = useSelector(state => state.comments.pageComments);
  const dispatch = useDispatch();

  const handleEditClick = (id, data) => {
    dispatch(editComment(id, data));
  }

  const handleDeleteClick = id => {
    dispatch(deleteComment(id));
  }

  useEffect(() => {
    if (!data) { dispatch(getCommentsByPage(1)); }
    dispatch(getCommentsByPage(1));
  }, [dispatch]);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No Data</div>;

  return (
    <CommentList comments={data} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
  )
}

export default CommentListContainer;