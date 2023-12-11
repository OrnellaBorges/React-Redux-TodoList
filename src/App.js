import { useState } from "react";
import "./styles.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";

export default function App() {
    //1- on déclare un tableau de tache dans un state
    const [tasks, setTasks] = useState([
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ]);

    //creation d'une nouvelle task qu'on passe en props dans le composant du formulaire
    const addTask = (text) => {
        const newTask = {
            text,
            id: Date.now(),
            done: false,
        };

        setTasks([...tasks, newTask]); // une copy du tableau initiale et on ajoute la nouvelle data
    };

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter((t) => t.id !== id);
        setTasks(filteredTasks);
    };

    // 3 - faire une copy de la liste originale pour ne pas modifier directement

    const toggleTask = (id) => {
        // 1 - elle va chercher en fonction de id la task en fonction de l'id qu'elle reçoit cette fction
        const realTask = tasks.find((t) => t.id === id);
        // 2 - elle va chercher trrouver l'index de la tache en question qu'elle stock dans la constante
        const index = tasks.findIndex((t) => t.id === id);
        // 3 - faire une copy de la liste originale pour ne pas modifier directement
        const taskCopy = { ...realTask };
        const tasksListCopy = [...tasks]; // les ... permettent de creer une copy de task
        // si c'est true on change a false vice et versa don change la valeur de la clé done
        taskCopy.done = !taskCopy.done;

        // remplacer la task par
        tasksListCopy[index] = taskCopy;
        // on fait appel au mutateur pour maj le state
        setTasks(tasksListCopy);
    };

    return (
        <div className="container">
            <article>
                <TasksHeader tasks={tasks} />

                {/* le composant qui affiche la liste des taches reçoit en props la liste des taches, 
                une fonction qui permet de maj une tache  si elle est réalisé ou non 
                et une autre fonction qui permet de supprimer une task */}
                <TasksList
                    tasks={tasks}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
                <footer>
                    {/* ce composant reçoit en props la fonction permettant d'ajouter une tache*/}
                    <TaskForm addTask={addTask} />
                </footer>
            </article>
        </div>
    );
}
