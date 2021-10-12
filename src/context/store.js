//base: https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf
import React, { createContext, useReducer } from "react";
import Reducer from './reducer';

const initialState = {
    name: "[NOME]",
    age: 0,
    work: false
};

//TODO: Insert multi Store
const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;