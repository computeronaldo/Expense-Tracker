import classes from "./Balance.module.css";

const Balance = (props) => {
  return (
    <section className={classes.balance}>
      <h2>YOUR BALANCE</h2>
      <p>$260.00</p>
    </section>
  );
};

export default Balance;
