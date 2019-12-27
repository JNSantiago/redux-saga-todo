import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import todos from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        todos
    }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;