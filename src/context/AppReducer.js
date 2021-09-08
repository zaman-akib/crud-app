export default (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [action.value, ...state.todos]
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === action.id ? action.value : todo))
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.value)
            }
        default:
            return state
    }
}