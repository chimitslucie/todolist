import { React, useState, useEffect } from "react";

function TodoList() {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('');
            localStorage.setItem('todos', JSON.stringify([...todos, task]));
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        localStorage.removeItem('todos');
        setTodos(newTodos);
    };

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    return (
        <div className="todo">
            <form className="listTodoInput" onSubmit={handleSubmit}>
                <input
                    className="todoInput"
                    type="text"
                    placeholder="Ajouter une nouvelle tâche"
                    value={task}
                    onChange={handleInputChange}
                />
                <button className="todoInputBtn" type="submit">Ajouter</button>
            </form>
            <ul className="todoList">
                {todos.map((todo, index) => (
                    <li className="todoItem" key={index}>
                        {todo}
                        <button className="btnRemove" onClick={() => handleRemoveTodo(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList