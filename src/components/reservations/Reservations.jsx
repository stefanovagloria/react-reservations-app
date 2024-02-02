import image from "./../../assets/booking2.jpg";
import styles from "./Reservations.module.css";
import { useForm } from "../../hooks/useForm";

export default function Reservations() {
  const {values, onChangeHandler, onSubmit} = useForm(
    {
      date: "",
      guests: "",
      roomType: "",
      name: "",
      telephone: "",
      email: "",
      paymentMethod: "",
    },
    onSubmitHandler
  );

  async function onSubmitHandler(e) {
    console.log("Sending request..");
    // send post request to db
  }

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
        <form onSubmit={onSubmit}>
          <div className={styles.labels}>
            <label htmlFor="date">Choose a date</label>
            <input
              name="date"
              id="date"
              value={values.date}
              onChange={onChangeHandler}
            />
            <label htmlFor="guests">Number of guests</label>
            <input
              name="guests"
              id="guests"
              value={values.guests}
              onChange={onChangeHandler}
            />
          </div>
          <div className={styles.labels}>
            <label htmlFor="roomType">Choose a room</label>
            <input
              name="roomType"
              id="roomType"
              value={values.roomType}
              onChange={onChangeHandler}
            />
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              value={values.name}
              onChange={onChangeHandler}
            />
          </div>
          <div className={styles.labels}>
            <label htmlFor="telephone">Telephone</label>
            <input
              name="telephone"
              id="telephone"
              value={values.telephone}
              onChange={onChangeHandler}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              value={values.email}
              onChange={onChangeHandler}
            />
          </div>

          <div className={styles.labels}>
            <label htmlFor="paymentMethod">Preffered payment method</label>
            <input
              name="paymentMethod"
              id="paymentMethod"
              value={values.paymentMethod}
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <input
              className={styles.sendBtn}
              type="submit"
              value="Send request"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
