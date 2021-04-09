import React, {useEffect, useState} from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from "./components/todoList";

export interface ITodo {
    title: string
    id: number,
    isDone: boolean
}

const App: React.FC = () => {
    const [todos, setTodo] = useState<Array<ITodo>>([]);

    useEffect(()=> {
        const localTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodo(localTodos)
    },[])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const addTodo = (title: string) => {
        const todo: ITodo = {
            title,
            id: Date.now(),
            isDone: false
        };
        setTodo(prevState => ([todo, ...prevState]));
    };

    const onCheckbox = (id: number) => {
        setTodo(prevState => prevState.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: !todo.isDone
                }
            }
            return todo;
        }))
    };

    const onDel = (id: number) => {
        setTodo(prevState => prevState.filter(todo => {
            return todo.id !== id
        }))
    };
    return (
        <div className="App">
            <TodoForm onAdd={addTodo}/>
            <TodoList todos={todos} onCheckbox={onCheckbox} onDel={onDel}/>
        </div>
    );
};

export default App;
