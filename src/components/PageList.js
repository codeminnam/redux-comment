import React from 'react';
import styled from "styled-components";

const PageListStyle = styled.div`
  margin-bottom : 20px;
  text-align : center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) => active && `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

function PageList({ page, pageLength, onPageFetch }) {
  const page_count = Math.ceil(pageLength / 5);
  const pageArray = [];

  for (let i = 1; i <= page_count; i++) {
    pageArray.push(
      <Page
        key={i}
        onClick={() => onPageFetch(i)}
        active={(parseInt(page) === i) ? true : false}>
        {i}
      </Page>
    );
  }

  return <PageListStyle>{pageArray}</PageListStyle>
}

export default PageList;