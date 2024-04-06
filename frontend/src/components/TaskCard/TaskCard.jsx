import styles from "./taskCard.module.css";
import { useSelector } from "react-redux";
import "../../App.css";
//import { propFromTaskCard } from "../../externals/taskObject";

const TaskCard = (prop) => {
  const num = useSelector((store) => store.taskStore.entertainment);
  //console.log(propFromTaskCard);
  return (
    <div className={`p-3 shadow ${styles.taskCard}`}>
      <img
        className={`${prop.color} ${styles.iconSize}`}
        src={prop.icon}
        alt="icon"
      />
      <div className="mt-4">
        <h6 className="fw-bold m-0 p-0">{prop.task}</h6>
        <p className={`m-0 ${styles.fontSize}`}>{`${num} ${
          num > 1 ? "Tasks" : "Task"
        }`}</p>
      </div>
    </div>
  );
};

export default TaskCard;
