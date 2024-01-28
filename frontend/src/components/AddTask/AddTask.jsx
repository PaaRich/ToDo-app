import styles from "./addTask.module.css";
import { IoMdAdd } from "react-icons/io";

const AddTask = () => {
  return (
    <button className={`shadow ${styles.addTaskBtn}`}>
      <IoMdAdd size={27} />
    </button>
  );
};

export default AddTask;
