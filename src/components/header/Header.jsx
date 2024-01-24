import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">La Veranda</Link>
      </div>
      <div className={styles.menu}>
        <Link to="/about">ABOUT US</Link>
        <Link to="/city">TSAREVO</Link>
        <Link to="/reservations">RESERVATIONS</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/contacts">CONTACTS</Link>
      </div>
      <div className={styles.auth}>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">REGISTER</Link>
      </div>
    </nav>
  );
}
