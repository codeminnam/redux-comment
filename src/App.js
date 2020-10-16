import React from 'react';
import './App.css';
import styled from "styled-components";
import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';

function App() {

  const AppContainer = styled.div`
    background-color: #fff;
    box-shadow:  13px 13px 26px #cfcfcf, 
             -13px -13px 26px #ffffff;
  `;

  const Header = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 20px;
  `;

  const ListContainer = styled.div`
    padding: 20px 0;
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