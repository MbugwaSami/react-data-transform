import React, { Dispatch } from "react";

import appReducers from "./appReducers";

const { combinedAppReducers, combinedAppState } = appReducers;
const AppStateContext = React.createContext(combinedAppState);
const AppDispatchContext = React.createContext<Dispatch<Action>>(() => {});

function AppProvider(props: any) {
  const [state, dispatch] = React.useReducer(
    combinedAppReducers,
    combinedAppState
  );
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {props.children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
}
export { AppProvider, useAppState, useAppDispatch };
