import React, {
  createContext,
  useContext,
  useReducer
} from 'react';

const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider use={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProviderValue = () => useContext(StateContext);
