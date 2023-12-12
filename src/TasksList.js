import TaskItem from "./TaskItem";

const TasksList = (props) => {
    return (
        //je map sur la liste des task et dedans
        //j'appel le composant taskItem qui pour chaque task va creer une ligne de tache
        // il doit lui meme recevoir les fonctions toggle et delete !

        //Pour eviter le PROPS DRELING=  passage des props d'un composant parent eloigné à un composant enfant eloigné
        // on met en place redux pour eviter l'utilisation excessive des props
        // dans une petite apli ca va mais dans une grosse ça peut devenir pb !
        //c'est pour ça on utilise REDUX !



        // Je CALL le STORE 
        <>
            {props.tasks.map((t) => (
                <TaskItem
                    task={t}
                    key={t.id}
                    toggleTask={props.toggleTask}
                    deleteTask={props.deleteTask}
                />
            ))}
        </>
    );
};

export default TasksList;
