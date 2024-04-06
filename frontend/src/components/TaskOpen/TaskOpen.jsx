import styles from "./taskOpen.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import IndiTask from "./IndiTask";
//import taskData from "../../externals/taskObject";
import document from "../../assets/document-outline.svg";
import briefcase from "../../assets/briefcase-outline.svg";
import music from "../../assets/headset-outline.svg";
import airplane from "../../assets/airplane-outline.svg";
import book from "../../assets/book-outline.svg";
import home from "../../assets/home-outline.svg";
import food from "../../assets/pizza-outline.svg";
import shop from "../../assets/basket-outline.svg";

const TaskOpen = () => {
  const num = useSelector((store) => store.taskStore.entertainment);
  const navigate = useNavigate();
  const { task } = useParams();

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.top_container}>
          <div className={styles.nav}>
            <IoIosArrowBack onClick={() => navigate(-1)} size={28} />
            <BsThreeDotsVertical size={28} />
          </div>
          <div>
            <img
              className="my-3"
              src={
                task == "All"
                  ? document
                  : task == "Work"
                  ? briefcase
                  : task == "Music"
                  ? music
                  : task == "Travel"
                  ? airplane
                  : task == "Study"
                  ? book
                  : task == "Home"
                  ? home
                  : task == "Food"
                  ? food
                  : shop
              }
              alt="task"
            />
            <h2 className="ps-1 m-0">{task}</h2>
            <p className="ps-1">{num} tasks</p>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <ul>
            <li>
              <IndiTask />
              <IndiTask />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskOpen;
