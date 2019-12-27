export function requestTodos(){
    return { type: 'ASYNC_REQUEST_TODO_LIST' };
}

export function saveTodo(todo) {
    return { type: 'ASYNC_SAVE_TODO', payload: { todo: todo } };
}   