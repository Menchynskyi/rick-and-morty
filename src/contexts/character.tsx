import React, { createContext, useReducer, useContext } from 'react';

type State = {
  filterOptions: {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
  };
  page: number;
};

type Action =
  | { type: 'nextPage' }
  | { type: 'prevPage' }
  | { type: 'setPage'; payload: number }
  | { type: 'setFilterOptions'; payload: { option: string; value: string } };

type CharacterContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type CharacterProviderProps = { children: React.ReactNode };

const initialState: State = {
  filterOptions: {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  },
  page: 1,
};

const characterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'prevPage': {
      return {
        ...state,
        page: state.page - 1,
      };
    }
    case 'nextPage': {
      return {
        ...state,
        page: state.page + 1,
      };
    }
    case 'setPage': {
      return {
        ...state,
        page: action.payload,
      };
    }
    case 'setFilterOptions': {
      return {
        ...state,
        page: 1,
        filterOptions: {
          ...state.filterOptions,
          [action.payload.option]: action.payload.value,
        },
      };
    }
    default:
      return state;
  }
};

const CharacterContext = createContext<CharacterContextState | undefined>(
  undefined
);

export const CharacterProvider = ({ children }: CharacterProviderProps) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error(
      'useCharacterContext must be used within a CharacterProvider'
    );
  }
  return context;
};

export const useCharacterState = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error(
      'useCharacterState must be used within a CharacterProvider'
    );
  }
  return context.state;
};

export const useCharacterDispatch = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error(
      'useCharacterDispatch must be used within a CharacterProvider'
    );
  }
  return context.dispatch;
};
