import React, { createContext, useReducer, useContext } from 'react';

type State = {
  filterOptions: {
    name: string;
    type: string;
    dimension: string;
  };
  page: number;
};

type Action =
  | { type: 'setFilterOptions'; payload: { option: string; value: string } }
  | { type: 'resetFilterOptions' };

type LocationContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type LocationProviderProps = { children: React.ReactNode };

const initialState: State = {
  filterOptions: {
    name: '',
    type: '',
    dimension: '',
  },
  page: 1,
};

const locationReducer = (state: State, action: Action) => {
  switch (action.type) {
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
        ...initialState,
      };
    }
    default:
      return state;
  }
};

const LocationContext = createContext<LocationContextState | undefined>(
  undefined
);

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  return (
    <LocationContext.Provider value={{ state, dispatch }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      'useLocationContext must be used within a LocationProvider'
    );
  }
  return context;
};

export const useLocationState = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocationState must be used within a LocationProvider');
  }
  return context.state;
};

export const useLocationDispatch = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      'useLocationDispatch must be used within a LocationProvider'
    );
  }
  return context.dispatch;
};
