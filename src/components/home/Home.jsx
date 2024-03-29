import styles from "./Home.module.css";
import image from "./../../assets/1617011669.1774.jpg";
import SideHeader from "./../sideHeader/SideHeader";
import SubMenu from "../submenu/SubMenu";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={image}></img>
        <SideHeader />
      </div>
      <SubMenu />
    </>
  );
}
