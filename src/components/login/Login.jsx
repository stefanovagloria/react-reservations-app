import { useForm } from "../../hooks/useForm";
import styles from "./Login.module.css";

export default function Login() {
  const {values, onChangeHandler, onSubmit} = useForm(
    {
      email: "",
      password: "",
    },
    onSubmitHandler
  );

  async function onSubmitHandler(values) {
    console.log(values);
  }
  return (
    <form onSubmit={onSubmit}>
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
          value={values.email}
          onChange={onChangeHandler}
          required
        ></input>

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="psw"
          value={values.password}
          onChange={onChangeHandler}
          required
        ></input>
        <button type="submit" className={styles.registerbtn}>
          Login
        </button>
      </div>
    </form>
  );
}
