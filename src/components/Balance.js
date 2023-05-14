import { useContext } from "react";
import TransactionContext from "../store/transaction-context";
import classes from "./Balance.module.css";

const Balance = (props) => {
  const { transactions } = useContext(TransactionContext);

  const balance = transactions.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return (
    <section className={classes.balance}>
      <h2>YOUR BALANCE</h2>
      <p>${balance}</p>
    </section>
  );
};

export default Balance;
