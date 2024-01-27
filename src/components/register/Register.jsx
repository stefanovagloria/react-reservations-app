import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import styles from "./Register.module.css";

export default function Register() {
  const { values, onChangeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmitHandler
  );

  async function onSubmitHandler(values) {
    console.log(values);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.container}>
        <h1>Register</h1>

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

        <label htmlFor="password">
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

        <label htmlFor="rePassword">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="rePassword"
          id="psw-repeat"
          value={values.rePassword}
          onChange={onChangeHandler}
          required
        ></input>

        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>
        <button type="submit" className={styles.registerbtn}>
          Register
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
