// dans ce fichier je vais creer un entrepot = un store qui va gerer tout

import { createSlice } from "@reduxjs/toolkit";

// on creer un epartie du store de redux

// ici on déclare une sorte d'etat initialisé ici
const todoSlice = createSlice({
    name: "todo",
    // ici on initialise l'etat on transpose le state qui etait dans App ici dans l'objet global = le slice
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducer: {
        addTask: () => {},
        toggleTask: () => {},
        deleteTask: () => {},
    },
});

// Reducer = est une fonction qui va permerttre d'interagir avec l'etat
// prend en paramettre l'etat actuel et une action
