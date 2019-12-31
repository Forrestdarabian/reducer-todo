import { React, useState, initialState, reducer, useReducer } from 'react';
export const titleReducer = (state, action) => {
    switch (action.type) {
      case 'Task 1':
        return {
            item: 'Play guitar',
            completed: false,
            id: 934987439
          }
      case 'Task 2':
        return {
            item: 'Do the laundry',
            completed: false,
            id: 3892987589
          }
      default:
        return state;
    }
    
  };

const ListForm = () => {

  const [newTodo, setNewTodo] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState)

const changeHandler = e => {
  setNewTodo(e.target.value)
}

  return (
      <form>
        {/* <Todo todo={state} /> */}
        <input
          type="text"
          name="todo"
          placeholder="task"
          value={newTodo}
          onChange={changeHandler}
        />
        
        <button onClick={() => dispatch({type: 'ADD_TODO', payload: newTodo})} >add</button>
      </form>
  );
}
{

}
export default ListForm;

  
