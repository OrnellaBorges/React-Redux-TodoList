// dans ce fichier je vais creer un entrepot = un store qui va gerer tout

// MISE EN PLACE DE REDUX

import { createSlice } from "@reduxjs/toolkit";

// on creer un epartie du store de redux

// Reducer = est une fonction qui va permerttre d'interagir avec l'etat

// prend en paramettre l'etat actuel le state actuel et une action

// le payload = la donnée dont a besoin l'action pour executer sont l'action (type de l'acion + payload )

// ici on déclare une sorte d'etat initialisé ici
const todoSlice = createSlice({
    // creation du state
    name: "todo", // nom
    // ici on initialise l'etat on transpose le state qui etait dans App ici dans l'objet global = le slice
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],

    // creation du reducer
    reducer: {
        //action = {type : "ADD_TASK", payload: "faire du sport" }
        addTask: (state, action) => {
            //creation de la nouvelle tache
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload,
            };
            // action de pusher la nouvelle donné dans le tableau des state !
            state.push(newTask);
        },

        /*  action ={
            type: "TOGGLE_TASK",
            payload: 20
        } */

        // action.payload = 20

        toggleTask: (state, action) => {
            //c'est ce qu'il se trouve dans action:  {type: TOGGLE_TASK, payload: 20}
            const task = state.find((t) => t.id === action.payload);
            task.done = !task.done;
        },

        /*  const deleteTask = (id) => {
            const filteredTasks = tasks.filter((t) => t.id !== id);
            setTasks(filteredTasks);
        }; */
        deleteTask: (state, action) => {
            // {type: "DELETE_TASK", payload:20}
            /* 1- on filtre l'etat => pour chaque tache tu retourne ou tu gardes uniquement que les taches differentes de de celle qui on l'id que tua as reçu en parametre, 2- */
            state = state.filter((t) => t.id !== action.payload);
        },
    },
});
