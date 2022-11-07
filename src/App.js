import "./App.css";
// import des différents composants
import Footer from "./components/Footer";
import NewTask from "./components/NewTask";

// Import Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListUl, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
library.add(faListUl, faTrash);

function App() {
  // C'est l'état du tableau qui comporte les tâches ajoutées, par défaut, le tableau est vide
  const [taskTab, setTaskTab] = useState([]);
  // C'est l'état du contenu de l'input texte dans lequel on entre la tâche à ajouter.
  const [taskToAdd, setTaskToAdd] = useState("");
  return (
    <div className="App">
      <header>
        <FontAwesomeIcon className="top-left-icon" icon="list-ul" />{" "}
        <span>Todo List</span>
      </header>
      <main>
        <div className="task-list">
          {
            // Ici, on va faire un map sur le tableau de tâches, il retourne une nouvelle tâche à afficher à chaque fois qu'une tâche est ajoutée au tableau
            taskTab.map((elem, index) => {
              // console.log(elem);
              return (
                <NewTask
                  key={index}
                  task={elem}
                  index={index}
                  taskTab={taskTab}
                  setTaskTab={setTaskTab}
                />
              );
            })
          }
        </div>

        <div className="add-task">
          <input
            className="input-task"
            type="text"
            name="task"
            placeholder="new task"
            value={taskToAdd}
            // ici, au changement dans la barre d'entrée du texte pour les tâche, on met à jour l'état de cette tâche
            onChange={(event) => {
              setTaskToAdd(event.target.value);
              // console.log(taskToAdd);
            }}
          />
          <button
            className="new-task-submission"
            // Au clic, on va d'abord créer un clone du tableau de tâches, ensuite on lui ajoute la tâche qui est dans le state "taskToAdd", puis on envoie le nouveau tableau pour changer l'état de taskTab, et enfin, on remet à zéro l'état de taskToAdd pour vider l'input
            onClick={(event) => {
              if (taskToAdd) {
                event.preventDefault();
                const newTaskTab = [...taskTab];
                newTaskTab.push(taskToAdd);
                setTaskTab(newTaskTab);
                setTaskToAdd("");
              }

              // console.log(taskTab);
            }}
          >
            Add task
          </button>
        </div>
      </main>
      <Footer
        tech={"React"}
        techSite={"https://reactjs.org/"}
        place={"Le Reacteur"}
        placeSite={"https://www.lereacteur.io/"}
        author={"Boris"}
        linkedin={"https://www.linkedin.com/in/boris-labianca-01a52871/"}
      />
    </div>
  );
}

export default App;
