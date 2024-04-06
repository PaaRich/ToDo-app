import { useState } from "react";

import { IoLogoFacebook, IoLogoGoogle, IoLogoApple } from "react-icons/io5";
import checked from "../../assets/checkbox-logo.jpg";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.signIn_container}>
      <div>
        <img src={checked} alt="checked-img" />
      </div>
      <h2>Welcome back!</h2>
      <div className={styles.form_container}>
        <form>
          <span>
            <label className="ps-3">Email address:</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </span>
          <span>
            <label className="ps-3">Password:</label>
            <input
              type="password"
              placeholder="password@123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </span>
        </form>
      </div>
      {password == "" && password.length < 5 ? (
        <button className="btn btn-danger mb-4">Log in</button>
      ) : (
        <button className="btn btn-success mb-4">
          <Link className="text-white text-decoration-none" to="/homePage">
            Log in
          </Link>
        </button>
      )}

      <div className={styles.logo_container}>
        <p>or log in with:</p>
        <ul>
          <li>
            <IoLogoFacebook size={30} color="blue" />
          </li>
          <li>
            <IoLogoGoogle size={30} color="red" />
          </li>
          <li>
            <IoLogoApple size={30} color="black" />
          </li>
        </ul>
      </div>
      <p className="p-2"></p>
    </div>
  );
};

export default SignIn;
