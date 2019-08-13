import React, { useState } from 'react';
import { StyledForm, TodoInput } from './styles';
const TodoForm = props => {
    const [newTodo, setNewTodo] = useState({
        item: '',
        completed: false,
        id: 112334
    });
    const handleChanges = e => {
        setNewTodo({[e.target.name]: e.target.value})
    };
    
    return (
        <StyledForm>
            <h2>Forrest's Todo List</h2>
            <TodoInput onChange={handleChanges} name='item' type='text' placeholder="Enter todo" />
            <button type='submit'>Submit</button>
        </StyledForm>
    )
}
export default TodoForm
