import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageList from '../components/PageList';
import { getComments, getCommentsByPage, setCurrentPage } from '../store/modules/comments';

function PageListContainer() {
  const { data, loading, error } = useSelector(state => state.comments.comments);
  const current_Page = useSelector(state => state.comments.page);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const onPageFetch = (page) => {
    dispatch(getCommentsByPage(page));
    dispatch(setCurrentPage(page));
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <PageList
      page={current_Page}
      pageLength={data.length}
      onPageFetch={onPageFetch}
    />
  );
}

export default PageListContainer;