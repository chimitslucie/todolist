import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList() {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            setTodos([...todos, task]);
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="todo">
            <div className="listTodoInput">
                <input
                    className="todoInput"
                    type="text"
                    placeholder="Ajouter une nouvelle tâche"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="todoInputBtn" onClick={handleAddTodo}>Ajouter</button>
            </div>
            <ul className="todoList">
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemoveTodo(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList