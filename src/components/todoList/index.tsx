import React from 'react';
import './index';
import {ITodo} from "../../App";


interface ITodos {
    todos: Array<ITodo>,
    onCheckbox: (id: number) => void,
    onDel: (id: number) => void
}

const TodoList: React.FC<ITodos> = ({todos, onCheckbox, onDel}) => {

    return (
        <ul className='todo__list'>
            {todos.map((todo: ITodo) => {
                return (
                    <li key={todo.id}  className={`${todo.isDone ? 'todo__item--done': ''} todo__item`}>
                        <input onChange={() => onCheckbox(todo.id)} checked={todo.isDone} type="checkbox"/>
                        <p className='todo__item-title'>{todo.title}</p>
                        <button onClick={() => onDel(todo.id)} type='button'>delete</button>
                    </li>
                )
            })}

        </ul>
    );
};

export default TodoList;