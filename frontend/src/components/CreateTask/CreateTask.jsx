import styles from "./createTask.module.css";
import { IoMdClose } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const CreateTask = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  let month = monthNames[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  const fullDate = `${month} ${day}, ${year}`;

  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h2 className="m-0 p-0 text-black">New Task</h2>
        <IoMdClose
          onClick={() => navigate(-1)}
          className={styles.close_logo}
          size={25}
        />
      </div>
      <form action="">
        <label>What are you planning?</label>
        <textarea ref={inputRef} name="msg" cols="30" rows="10"></textarea>
      </form>
      <div className={`my-3 ${styles.cat}`}>
        <div>
          <FaRegBell className="me-2" color="blue" size={20} />
          <span>{fullDate}</span>
        </div>
        <div>
          <IoPricetagOutline className="me-2" color="blue" size={20} />
          Category
        </div>
      </div>
      <div className="w-100 bg-primary text-center text-white py-2 rounded">
        Create
      </div>
    </div>
  );
};

export default CreateTask;
