import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentList from '../components/CommentList';
import { getCommentsByPage } from '../store/modules/comments';


function CommentListContainer() {
  const { data, loading, error } = useSelector(state => state.comments.pageComments);
  const { comment } = useSelector(state => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) { dispatch(getCommentsByPage(1)); }
    dispatch(getCommentsByPage(1));
  }, [dispatch, comment]);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No Data</div>;

  return (
    <CommentList comments={data} />
  )
}

export default CommentListContainer;