const INITIAL_STATE = {
    todos: [],
    loading: false,
    loadingSave: false,
    error: {
        hasError: false,
        errorMessage: null
    },
    errorSave: {
        hasError: false,
        errorMessage: null
    }
};

export default function todos(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'REQUEST_TODO_LIST':
            return { ...state, loading: true };
        case 'SUCCESS_TODO_LIST':
            return { ...state, loading: false, todos: action.payload.todos };
        case 'FAILURE_TODO_LIST':
            return { ...state, error: { hasError: true, errorMessage: action.payload.errorMessage }, loading: false }; 
        case 'REQUEST_SAVE_TODO':
            return { ...state, loadingSave: true };
        case 'SUCCESS_SAVE_TODO':
            console.log(action.payload.todo)
            return { ...state, loadingSave: false, todos: [ ...state.todos, action.payload.todo ] };
        case 'FAILURE_SAVE_TODO':
            return { ...state, errorSave: { hasError: true, errorMessage: action.payload.errorMessage }, loadingSave: false }; 
        default:
            return state;   
    }
}