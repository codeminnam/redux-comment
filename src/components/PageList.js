import React from 'react';
import styled from "styled-components";

const PageListStyle = styled.div`
  margin: 10px 0;
  text-align : center;
`;

const Page = styled.button`
  padding: 0.275rem 0.75rem;
  background-color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    background-color: #ffc82c;
    border-color: #ffc82c;
    color: #fff;
    opacity: 0.7;
  }
  ${({ active }) => active && `
        background-color: #ffc82c;
        border-color: #ffc82c;
        color: #fff;
  `}
  margin-right: 3px;
  
`;

function PageList({ page, pageLength, onPageFetch }) {
  const page_count = Math.ceil(pageLength / 4);
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