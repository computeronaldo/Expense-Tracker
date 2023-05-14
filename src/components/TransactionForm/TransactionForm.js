import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import TransactionContext from "../../store/transaction-context";
import Input from "../UI/Input";
import classes from "./TransactionForm.module.css";

const TransactionForm = (props) => {
  const { add } = useContext(TransactionContext);

  const titleRef = React.createRef();
  const amountRef = React.createRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      title: titleRef.current.value,
      amount: +amountRef.current.value,
      id: uuid(),
    };

    add(newTransaction);

    titleRef.current.value = "";
    amountRef.current.value = "";
  };

  return (
    <>
      <h3 className={classes.box}>Add New Transaction</h3>
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          ref={titleRef}
          label="Title"
          input={{
            id: "title",
            type: "text",
          }}
        />
        <Input
          ref={amountRef}
          label="Amount"
          input={{
            id: "amount",
            type: "text",
          }}
        />
        <button>Add transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
