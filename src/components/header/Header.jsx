import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a>La Veranda</a>
      </div>
      <div className={styles.menu}>
        <a>ABOUT US</a>
        <a>TSAREVO</a>
        <a>RESERVATIONS</a>
        <a>GALLERY</a>
        <a>CONTACTS</a>
      </div>
    </div>
  );
}
