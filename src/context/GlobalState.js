import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './ActionTypes'

const initialState = {
    todos: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dsipatch] = useReducer(AppReducer, initialState)

    function addTodo(newTodo) {
        dsipatch({
            type: ADD_TODO,
            value: newTodo,
        })
    }

    function updateTodo(id, updatedTodo) {
        dsipatch({
            type: UPDATE_TODO,
            id: id,
            value: updatedTodo,
        })
    }

    function deleteTodo(id) {
        dsipatch({
            type: DELETE_TODO,
            value: id,
        })
    }

    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            addTodo,
            updateTodo,
            deleteTodo
        }}>
            {children}
        </GlobalContext.Provider>
    )
}