import styles from "./addTask.module.css";
import { IoMdAdd } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const AddTask = () => {
  return (
    <>
      <Link to="createTask">
        <button className={`shadow ${styles.addTaskBtn}`}>
          <IoMdAdd size={27} />
        </button>
      </Link>
      <Outlet />
    </>
  );
};

export default AddTask;
