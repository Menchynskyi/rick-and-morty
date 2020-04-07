import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, MainContainer, LinkStyled } from './AppStyled';
import { Characters } from './pages';

export const App: React.FC = () => {
  return (
    <>
      <Header>
        <LinkStyled to="/">Rick and Morty</LinkStyled>
      </Header>
      <MainContainer>
        <Switch>
          <Route path="/" exact component={Characters} />
        </Switch>
      </MainContainer>
    </>
  );
};
