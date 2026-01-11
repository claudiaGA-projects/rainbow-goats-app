import styles from "../styles/Login.module.css"
import logo from "../assets/RainbowGoats-logo.avif"
import { Link } from "react-router-dom";

function Login() {
  return (

    <div className={styles.container}>
      <div className={styles.card}>
        <img src={logo} alt="Company logo" className={styles.logo} />

        <div className={styles.field}>
          <label>Email</label>
          <input className={styles.input} type="email" />
        </div>

        <div className={styles.field}>
          <label>Password</label>
          <input className={styles.input} type="password" />
        </div>

        <button className={`primary ${styles.button}`}>Log in</button>

        <p className={styles.registerText}>
  Don’t have an account?
  <Link to="/register" className={styles.registerLink}>
    Create account
  </Link>
</p>
      </div>
    </div>
  );
}

export default Login;