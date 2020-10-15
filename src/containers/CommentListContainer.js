import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from '../components/CommentList';
import { getComments, getCommentsByPage, getComment, deleteComment, setCurrentPage } from '../store/modules/comments';


function CommentListContainer() {
  const { data, loading, error } = useSelector(state => state.comments.pageComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsByPage())
  }, [dispatch]);

  const handleEditFormClick = (id) => {
    dispatch(getComment(id));
  }

  const handleDeleteClick = async id => {
    await dispatch(deleteComment(id));
    await dispatch(getCommentsByPage());
    await dispatch(getComments());
    dispatch(setCurrentPage(1));
  }
  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No Data</div>;

  return (
    <CommentList
      comments={data}
      onEditFormClick={handleEditFormClick}
      onDeleteClick={handleDeleteClick}
    />
  )
}

export default CommentListContainer;