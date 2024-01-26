import styles from "./Login.module.css";

export default function Login() {
  return (
    <form>
      <div className={styles.container}>
        <h1>Login</h1>

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        ></input>

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        ></input>
        <button type="submit" className={styles.registerbtn}>
          Login
        </button>
      </div>

      <div className="container signin">
        <p>
          Already have an account? <a href="#">Sign in</a>.
        </p>
      </div>
    </form>
  );
}
