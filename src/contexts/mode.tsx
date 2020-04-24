import React, { createContext, useState, useContext } from 'react';

type State = {
  lightMode: boolean;
};

type ModeContextState = {
  state: State;
  toggleMode: () => void;
};

type ModeProviderProps = { children: React.ReactNode };

const ModeContext = createContext<ModeContextState | undefined>(undefined);

export const ModeProvider = ({ children }: ModeProviderProps) => {
  const userMode = localStorage.getItem('isLightMode');
  const [state, setState] = useState({
    lightMode: userMode === 'true',
  });

  const toggleMode = () => {
    localStorage.setItem('isLightMode', `${!state.lightMode}`);
    setState((prev) => {
      return {
        ...prev,
        lightMode: !prev.lightMode,
      };
    });
  };

  return (
    <ModeContext.Provider value={{ state, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useModeContext = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useModeContext must be used within a ModeProvider');
  }
  return context;
};

export const useModeState = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useModeState must be used within a ModeProvider');
  }
  return context.state;
};

export const useModeToggle = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useModeDispatch must be used within a CharacterProvider');
  }
  return context.toggleMode;
};
