import TransactionItem from "./TransactionItem";
import classes from "./TransactionItems.module.css";

const TransactionItems = (props) => {
  const items = [
    { title: "Cash", amount: 500, id: "m1" },
    { title: "Book", amount: -40, id: "d3" },
  ];

  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return (
          <TransactionItem
            key={item.id}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
};

export default TransactionItems;
