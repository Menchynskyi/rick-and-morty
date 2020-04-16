import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { Header, MainContainer, LinkStyled } from './AppStyled';
import { Characters, CharacterProfile } from './pages';
import { Logo } from './components';

export const App: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Redirect to="/characters" />;
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
          <Route path="/characters" exact component={Characters} />
          <Route path="/characters/:id" component={CharacterProfile} />
        </Switch>
      </MainContainer>
    </>
  );
};
