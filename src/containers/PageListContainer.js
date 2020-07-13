import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageList from '../components/PageList';
import { getComments, getCommentsByPage } from '../store/modules/comments';

function PageListContainer() {
  const { length } = useSelector(state => state.comments.comments);
  const dispatch = useDispatch();
  const pageLength = length % 5 === 0 ? parseInt(length / 5) : parseInt(length / 5) + 1;

  const onPageFetch = (pageNum) => {
    const page = pageNum.i;
    dispatch(getCommentsByPage(page));
  };

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <PageList pageLength={pageLength} onPageFetch={onPageFetch} />
  );
}

export default PageListContainer;