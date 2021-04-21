import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

const initialState = {
    employees: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

   return (
       <GlobalContext.Provider value={[state.employees, dispatch]}>
           {children}
       </GlobalContext.Provider>
   )
}


