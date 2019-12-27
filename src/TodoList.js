import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from './store/actions';

class TodoList extends Component {
    state = {
        todo: ''
    }

    componentDidMount() {
        this.props.requestTodos();
    }

    render() {
        return(
            <div>
                <h1>Cadastrar um Novo Todo</h1>
                <input type="text" name="todo" onChange={(e) => this.setState({todo: e.target.value})} value={this.state.todo} />
                <button onClick={() => this.props.saveTodo(this.state.todo) }>Salvar</button> 
                { this.props.loadingSave && '| Salvando...Aguarde!' }
                { this.props.errorSave.hasError && <p>Ocorreu um erro! {this.props.errorSave.hasError}</p> }

                <h1>Meus Todos { this.props.loading && '| Carregando...Aguarde!' }</h1>
                { this.props.error.hasError && <p>Ocorreu um erro! {this.props.error.hasError}</p> }
                {
                    this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </div>
        ); 
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
    loading: state.todos.loading,
    error: state.todos.error,
    loadingSave: state.todos.loadingSave,
    errorSave: state.todos.errorSave
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);