//base: https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf
import React, { createContext, useReducer } from "react";
import ReducerA from './reducerA';
import ReducerB from './reducerB';

const A_State = {
    name: "[NOME]",
    age: 0,
    work: false
};

const B_State = {
    company: "[COMPANY]",
};

//TODO: Insert multi Store
const Store = ({ children }) => {
    const [stateA, dispatchA] = useReducer(ReducerA, A_State);
    const [stateB, dispatchB] = useReducer(ReducerB, B_State);
    return (
        <Context.Provider value={[stateA, dispatchA, stateB, dispatchB]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext([A_State, B_State]);
export default Store;