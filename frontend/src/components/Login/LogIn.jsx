import { useState } from "react";

import { IoLogoFacebook, IoLogoGoogle, IoLogoApple } from "react-icons/io5";
import checked from "../../assets/checkbox-logo.jpg";
import styles from "./Login.module.css";

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
            />
          </span>
          <span>
            <label className="ps-3">Password:</label>
            <input
              type="password"
              placeholder="password@123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
        </form>
      </div>
      <button className="mb-4">Sign up</button>
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
    </div>
  );
};

export default SignIn;
