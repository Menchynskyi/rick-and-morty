import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { Header, MainContainer, LinkStyled } from './AppStyled';
import { Characters } from './pages';
import { Logo } from './components';

export const App: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Redirect to="/characters/1" />;
  }
  return (
    <>
      <Header>
        <LinkStyled to="/">
          <Logo />
        </LinkStyled>
      </Header>
      <MainContainer>
        <Switch>
          <Route path="/characters/:page" component={Characters} />
        </Switch>
      </MainContainer>
    </>
  );
};
