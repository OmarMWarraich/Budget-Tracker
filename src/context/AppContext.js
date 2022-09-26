import React from "react";
import { useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 10000,
    expenses: [
        {id: 1, name: 'Shopping', cost: 40},
        {id: 2, name: 'Holiday', cost: 400},
        {id: 3, name: 'Transportation', cost: 60},
        {id: 4, name: 'Fuel', cost: 70},
        {id: 5, name: 'Food', cost: 120},
    ],
};

export const AppContext = React.createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};