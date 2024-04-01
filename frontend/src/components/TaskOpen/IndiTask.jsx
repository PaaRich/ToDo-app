import styles from "./taskOpen.module.css";
const IndiTask = () => {
  return (
    <div className={` ${styles.ind_container}`}>
      <span className="d-flex justify-content-between align-items-center">
        <h4>Task</h4>
        {/* {validity?:} */}
        <input type="checkbox" />
      </span>
      <p>14:00</p>
    </div>
  );
};

export default IndiTask;
