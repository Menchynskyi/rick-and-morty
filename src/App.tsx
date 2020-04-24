import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { Header, MainContainer } from './AppStyled';
import {
  Characters,
  CharacterProfile,
  EpisodeProfile,
  Episodes,
  LocationProfile,
  Locations,
} from './pages';
import { Navigation } from './components';
import { Theme } from './theme';
import { EpisodeProvider, useModeState } from './contexts';

export const App: React.FC = () => {
  const { lightMode } = useModeState();
  const location = useLocation();
  if (location.pathname === '/') {
    return <Redirect to="/characters" />;
  }
  return (
    <Theme lightMode={lightMode}>
      <Header>
        <Navigation />
      </Header>
      <MainContainer>
        <Switch>
          <Route path="/characters" exact component={Characters} />
          <Route path="/characters/:id" component={CharacterProfile} />
          <Route path="/locations" exact component={Locations} />
          <Route path="/locations/:id" component={LocationProfile} />
          <EpisodeProvider>
            <Route path="/episodes" exact component={Episodes} />
            <Route
              path="/episodes/:id/:episodeNumber"
              component={EpisodeProfile}
            />
          </EpisodeProvider>
        </Switch>
      </MainContainer>
    </Theme>
  );
};
