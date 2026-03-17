"use client"

import { useState, useContext, createContext } from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
    const [expenses, setExpenses] = useState([])

    const value = {
        expenses,
        setExpenses
    }

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    )
}

export function useExpense() {
    const context = useContext(ExpenseContext)
    if (!context) {
        throw new Error("useExpense must be used within an ExpenseProvider")
    }
    return context
}