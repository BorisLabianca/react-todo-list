import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NewTask = ({ task, index, taskTab, setTaskTab }) => {
  // C'est l'état qui permet de définir si une tâche est barrée ou non
  const [strikethrough, setStrikethrough] = useState(false);
  return (
    <div
      key={index}
      //   si strikethrough est vraie, cela signifie que la tâche a été barrée et donc je change son classname pour pouvoir changer son ordre et la mettre en bas dans la liste
      className={strikethrough === true ? "new-task new-order" : "new-task"}
    >
      <input
        type="checkbox"
        // au clic, je change la valeur de striketrhough en true ou false selon son état avant le clic
        checked={strikethrough ? true : false}
        onClick={() => {
          setStrikethrough(!strikethrough);
        }}
      />

      <span
        //   si strikethrough est vraie, cela signifie que la tâche doit être barrée et donc je change son classname pour pouvoir afficher le texte barré
        className={strikethrough === true ? "strikethrough" : ""}
      >
        {task}
      </span>
      <FontAwesomeIcon
        className="trash-icon"
        icon="trash"
        // Au click sur la poubelle, je crée un clone de mon tableau de tâches, je lui enlève l'élément que je souhaite supprimer selon son index et j'envoie la nouvelle valeur de mon tableau de tâches
        onClick={() => {
          const newTaskTab = [...taskTab];
          newTaskTab.splice(index, 1);
          setTaskTab(newTaskTab);
        }}
      />
    </div>
  );
};
export default NewTask;
