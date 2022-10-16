import React, { createContext, useReducer } from "react";

const initialState = {
    transactions: [
        { id: 1, description: "Abc1", transactionAmount: 234 },
        { id: 1, description: "Abc2", transactionAmount: -234 },
        { id: 1, description: "Abc3", transactionAmount: 34 },
        { id: 1, description: "Abc4", transactionAmount: -4 }
    ]
}

export const globalContext =  createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <globalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </globalContext.Provider>
    )
}