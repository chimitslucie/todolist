import React from "react";

function TodoItem({ task, deleteTask, toggleCompleted }) {

    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item">
            <input
            className="itemCheckbox"
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p className="itemText">{task.text}</p>
            <button className="itemBtn" onClick={() => deleteTask(task.id)}>
                Supprimer
            </button>
        </div>
    );
}

export default TodoItem;