import { Link } from "react-router-dom";
import styles from "./SubMenu.module.css";

export default function SubMenu() {
  return (
    <div className={styles.container}>
      <div>
        <Link to='/city'><h2>Tsarevo</h2></Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          doloremque quod ipsum. Mollitia ipsum nam molestias obcaecati voluptas
          impedit saepe sequi cum corrupti ex quasi asperiores, nemo natus
          magni. Eveniet.
        </p>
      </div>
      <div>
        <Link to='/guest-house'><h2>Our Guest House</h2></Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          doloremque quod ipsum. Mollitia ipsum nam molestias obcaecati voluptas
          impedit saepe sequi cum corrupti ex quasi asperiores, nemo natus
          magni. Eveniet.
        </p>
      </div>
      <div>
        <Link to='/about'><h2>About Us</h2></Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          doloremque quod ipsum. Mollitia ipsum nam molestias obcaecati voluptas
          impedit saepe sequi cum corrupti ex quasi asperiores, nemo natus
          magni. Eveniet.
        </p>
      </div>
    </div>
  );
}
