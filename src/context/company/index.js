import React, { createContext, useReducer } from "react";
import Reducer from './reducer';

const State = {
    company: "[EMPRESA]"
};

const CompanyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, State);
    return (
        <CompanyContext.Provider value={[state, dispatch]}>
            {children}
        </CompanyContext.Provider>
    )
};

export const CompanyContext = createContext(State);
export default CompanyProvider;