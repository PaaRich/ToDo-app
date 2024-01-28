import TaskCard from "../TaskCard/TaskCard";
import { HiMenuAlt2 } from "react-icons/hi";
import taskData from "../../externals/taskObject";
import styles from "./homePage.module.css";
const HomePage = () => {
  return (
    <div className={`p-3 ${styles.homePage_container}`}>
      <div>
        <HiMenuAlt2 size={30} color="black" />
      </div>
      <h1 className="fw-bold py-3">Lists</h1>
      <div className={styles.taskCard_container}>
        {taskData.map((data, index) => (
          <TaskCard
            key={index}
            task={data.task}
            icon={data.icon}
            color={data.color}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
