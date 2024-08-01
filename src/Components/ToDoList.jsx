import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { type } from "@testing-library/user-event/dist/type";

function TodoList() {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [isChecked, setIsChecked] = useState(task.checked);

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
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="todo">
            <form className="todoForm" onSubmit={handleSubmit}>
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
                        <label className="todoItemContainer">
                            <input type="checkbox" className={`todoItemCheckbox ${isChecked ? "checked" : ""}`} value={isChecked} onChange={handleChange} />
                            <span className="checkmark"></span>
                            <span className="todoItemText">{todo}</span>
                        </label>
                        <button className="btnRemove" onClick={() => handleRemoveTodo(index)}><FontAwesomeIcon icon={faXmark} className="btnRemoveIcon" /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList