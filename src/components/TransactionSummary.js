import classes from "./TransactionSummary.module.css";

const TransactionSummary = (props) => {
  return (
    <div className={classes.summary}>
      <section>
        <h3>INCOME</h3>
        <p>$500.00</p>
      </section>
      <section>
        <h3>EXPENSE</h3>
        <p>$240.00</p>
      </section>
    </div>
  );
};

export default TransactionSummary;
