import React from 'react';
import './App.css';
import styled from "styled-components";
import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';

function App() {

  const AppContainer = styled.div`
    border: 1px solid lightgray;
    background-color: #fff;
  `;

  const Header = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 20px;
  `;

  const ListContainer = styled.div`
    padding: 20px;
  `;

  return (
    <AppContainer>
      <Header>
        <strong>Comment Page</strong>
      </Header>
      <ListContainer>
        <CommentListContainer />
        <PageListContainer />
      </ListContainer>
      <FormContainer />
    </AppContainer>
  )
}

export default App;