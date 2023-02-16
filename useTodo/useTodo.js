import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
    }

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    };
    
    const handleDeleteTodo = (id) => {
        const actionDelete = {
            type: '[TODO] Remove Todo',
            payload: id,
        }
        dispatch(actionDelete);
        };
    
    const handleToggleTodo = (id) => {
        const actionToggle = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch(actionToggle);
        };
    
    return {
    todos,
    countAllTodo: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done ).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    }
};
