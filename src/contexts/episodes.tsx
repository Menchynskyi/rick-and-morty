import React, { createContext, useReducer, useContext } from 'react';
import { separateEpisodeNumber } from '../utils';

type EpisodeImdbInfo = {
  plot: string;
  rating: string;
  runtime: string;
  poster: string;
} | null;

type State = {
  dataImdb: EpisodeImdbInfo;
  loadingImdb: boolean;
  errorImdb: boolean;
  filterOptions: {
    name: string;
    episode: string;
  };
  page: number;
};

type Action =
  | { type: 'successFetchImdb'; payload: { [field: string]: string } }
  | { type: 'errorFetchImdb' }
  | { type: 'resetDataImdb' }
  | { type: 'setFilterOptions'; payload: { option: string; value: string } }
  | { type: 'resetFilterOptions' };

type EpisodeContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type EpisodeProviderProps = { children: React.ReactNode };

const initialState: State = {
  dataImdb: null,
  loadingImdb: true,
  errorImdb: false,
  filterOptions: {
    name: '',
    episode: '',
  },
  page: 1,
};

const episodeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'successFetchImdb': {
      const dataImdb = {
        plot: action.payload.Plot,
        rating: action.payload.imdbRating,
        runtime: action.payload.Runtime,
        poster: action.payload.Poster,
      };
      return {
        ...state,
        dataImdb,
        loadingImdb: false,
        errorImdb: false,
      };
    }
    case 'errorFetchImdb': {
      return {
        ...state,
        loadingImdb: false,
        errorImdb: true,
      };
    }
    case 'resetDataImdb': {
      return {
        ...initialState,
      };
    }
    case 'setFilterOptions': {
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          [action.payload.option]: action.payload.value,
        },
      };
    }
    case 'resetFilterOptions': {
      return {
        ...state,
        filterOptions: { ...initialState.filterOptions },
      };
    }
    default:
      return state;
  }
};

const EpisodeContext = createContext<EpisodeContextState | undefined>(
  undefined
);

export const EpisodeProvider = ({ children }: EpisodeProviderProps) => {
  const [state, dispatch] = useReducer(episodeReducer, initialState);

  return (
    <EpisodeContext.Provider value={{ state, dispatch }}>
      {children}
    </EpisodeContext.Provider>
  );
};

export const fetchImdb = async (
  dispatch: React.Dispatch<Action>,
  episodeNumber: string | undefined
) => {
  if (!episodeNumber) {
    dispatch({ type: 'errorFetchImdb' });
    return;
  }
  const [season, episode] = separateEpisodeNumber(episodeNumber);
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=f4ce018b&i=tt2861424&Season=${season}&Episode=${episode}`
    );
    const dataImdb = await res.json();
    if (dataImdb.Error) {
      dispatch({ type: 'errorFetchImdb' });
    } else {
      dispatch({ type: 'successFetchImdb', payload: dataImdb });
    }
  } catch {
    dispatch({ type: 'errorFetchImdb' });
  }
};

export const useEpisodeContext = () => {
  const context = useContext(EpisodeContext);
  if (context === undefined) {
    throw new Error('useEpisodeContext must be used within a EpisodeProvider');
  }
  return context;
};

export const useEpisodeState = () => {
  const context = useContext(EpisodeContext);
  if (context === undefined) {
    throw new Error('useEpisodeState must be used within a EpisodeProvider');
  }
  return context.state;
};

export const useEpisodeDispatch = () => {
  const context = useContext(EpisodeContext);
  if (context === undefined) {
    throw new Error(
      'useEpisodeDispatch must be used within a CharacterProvider'
    );
  }
  return context.dispatch;
};
