import styles from "./taskOpen.module.css";
import document from "../../assets/document-outline.svg";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
const TaskOpen = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.top_container}>
        <div className={styles.nav}>
          <IoIosArrowBack size={28} />
          <BsThreeDotsVertical size={28} />
        </div>
        <div>
          <img className="my-3" src={document} alt="task" />
          <h2 className="ps-1 m-0">All</h2>
          <p className="ps-1">23 tasks</p>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <ul>
          <li>
            <p>late</p>
            <span>
              <p>task 1</p>
              <p>time</p>
            </span>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskOpen;
