import image from "./../../assets/booking2.jpg";
import styles from "./Reservations.module.css";

export default function Reservations() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={image} />
      </div>
      <div className={styles.bookingForm}>
        <h1>BOOK A ROOM</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit pam
          dolorem quos expedita, odio quibusdam esse ducimus deleniti nulla
          minus omnis totam tempore cupiditate.
        </p>
        <form>
          <div className={styles.labels}>
            <label>Choose a date</label>
            <input />
            <label>Number of guests</label>
            <input />
          </div>
          <div className={styles.labels}>
            <label>Choose a room</label>
            <input />
            <label>Name</label>
            <input />
          </div>
          <div className={styles.labels}>
            <label>Telephone</label>
            <input />
            <label>Email</label>
            <input />
          </div>

          <div className={styles.labels}>
            <label>Preffered payment method</label>
            <input />
          </div>

          <div>
            <input type="submit" value="Send request" />
          </div>
        </form>
      </div>
    </div>
  );
}
