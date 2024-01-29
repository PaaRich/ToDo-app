import styles from "./taskOpen.module.css";
import document from "../../assets/document-outline.svg";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const TaskOpen = (prop) => {
  const navigate = useNavigate();

  return (
    <div className={styles.main_container}>
      <div className={styles.top_container}>
        <div className={styles.nav}>
          <IoIosArrowBack onClick={() => navigate(-1)} size={28} />
          <BsThreeDotsVertical size={28} />
        </div>
        <div>
          <img className="my-3" src={document} alt="task" />
          <h2 className="ps-1 m-0">{prop.task}</h2>
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
