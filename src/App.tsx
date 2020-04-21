import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { Header, MainContainer, LinkStyled } from './AppStyled';
import {
  Characters,
  CharacterProfile,
  EpisodeProfile,
  LocationProfile,
} from './pages';
import { Logo } from './components';
import { Theme } from './theme';

export const App: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Redirect to="/characters" />;
  }
  return (
    <Theme darkMode>
      <Header>
        <LinkStyled to="/">
          <Logo />
        </LinkStyled>
      </Header>
      <MainContainer>
        <Switch>
          <Route path="/characters" exact component={Characters} />
          <Route path="/characters/:id" component={CharacterProfile} />
          <Route
            path="/episodes/:id/:episodeNumber"
            component={EpisodeProfile}
          />
          <Route path="/locations/:id" component={LocationProfile} />
        </Switch>
      </MainContainer>
    </Theme>
  );
};
