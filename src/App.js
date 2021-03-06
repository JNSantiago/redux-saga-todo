import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import TodoList from './TodoList';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
