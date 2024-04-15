import { useState } from "react";

export function Form() {

    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        <input type="checkbox" />
        { task }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="tache" placeholder="Entrer une tâche" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Ajouter</button>
        </form>
    )
}
