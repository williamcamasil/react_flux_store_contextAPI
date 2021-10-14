import React, { createContext, useReducer } from "react";
import Reducer from './reducer';

const State = {
    name: "[NOME]",
    age: 0,
    work: false
};

const PersonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, State);
    return (
        <PersonContext.Provider value={[state, dispatch]}>
            {children}
        </PersonContext.Provider>
    )
};

export const PersonContext = createContext(State);
export default PersonProvider;