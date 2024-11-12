import React from "react";
import TransactionsForm from "../components/TransactionsForm";
import TransactionList from "../components/TransactionList";

const Transactions = () => {
  return (
    <>
      <TransactionsForm />
      <TransactionList />
    </>
  );
};

export default Transactions;
