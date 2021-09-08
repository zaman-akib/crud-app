import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './ActionTypes'

export default (state, action) => {
    const {todos} = state
    const {type, id, value} = action

    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [value, ...todos]
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: todos.map(todo => (todo.id === id ? action.value : todo))
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: todos.filter(todo => todo.id !== action.value)
            }
        default:
            return state
    }
}