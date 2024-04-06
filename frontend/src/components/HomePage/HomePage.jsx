import TaskCard from "../TaskCard/TaskCard";
import { HiMenuAlt2 } from "react-icons/hi";
import taskData from "../../externals/taskObject";
import styles from "./homePage.module.css";
import { Link } from "react-router-dom";

//import { useContext } from "react";
const HomePage = () => {
  //const myIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={`p-3 ${styles.homePage_container}`}>
      <div>
        <HiMenuAlt2 size={30} color="black" />
      </div>
      <h1 className="fw-bold py-3">Lists</h1>

      <div className={styles.taskCard_container}>
        {taskData.map((data, index) => (
          <Link
            key={index}
            className="text-decoration-none text-black"
            to={`/todo/${data.task}`}
          >
            <TaskCard task={data.task} icon={data.icon} color={data.color} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
