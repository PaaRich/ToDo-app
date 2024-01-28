import checkedBox from "../../assets/checkbox-logo.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";
import styles from "./Intro.module.css";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <section>
      <div className={`${styles.intro_container} position-relative`}>
        <div className={styles.a}>
          <div>
            <img src={checkedBox} alt="check-box" />
          </div>
          <div>
            <h2>Got things done.</h2>
            <p>Just a click away from planning your tasks.</p>
          </div>
        </div>

        <span>
          <Link to="../HomePage/HomePage.jsx">
            <IoArrowForwardSharp size={50} color="white" />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Intro;
