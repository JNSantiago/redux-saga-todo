import axios from 'axios';
import { takeLatest, call, put, all } from 'redux-saga/effects';

const getAllTodos = () => axios.get('https://jsonplaceholder.typicode.com/todos');

function* getTodos() {
    yield put({ type: 'REQUEST_TODO_LIST' });
    try{
        const response = yield call(getAllTodos);
        yield put({ type: 'SUCCESS_TODO_LIST', payload: { todos: response.data } });
    }catch(err) {
        yield put({ type: 'FAILURE_TODO_LIST', payload: { errorMessage: err.response.data } })
    }
}

function* saveTodo(data) {
    yield put({ type: 'REQUEST_SAVE_TODO' });
    try{
        const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/todos', {
            title: data.payload.todo,
            completed: false,
            userId: 1
        });
        yield put({ type: 'SUCCESS_SAVE_TODO', payload: { todo: response.data } });
    }catch(err) {
        yield put({ type: 'FAILURE_SAVE_TODO', payload: { errorSave: err } });
    }
}

export default function* root() {
    yield all(
        [
            takeLatest('ASYNC_REQUEST_TODO_LIST', getTodos),
            takeLatest('ASYNC_SAVE_TODO', saveTodo),
        ]
    );
}